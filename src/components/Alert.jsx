import React from "react";
import classNames from "classnames";

const Alert = ({
  message = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi assumenda numquam deseruntconsectetur autem nihil quos debitis dolor culpa",
  title = "Something went wrong",
  type = "danger",
}) => {
  const getColor = () => {
    if (type === "warning") {
      return "yellow";
    } else if (type === "success") {
      return "green";
    } else {
      return "red";
    }
  };

  const color = getColor(); // Get the color based on the type

  return (
    <div
      role="alert"
      className={classNames(
        "rounded border-s-4 p-4",
        {
          "border-yellow-500 bg-yellow-50": color === "yellow",
          "border-green-500 bg-green-50": color === "green",
          "border-red-500 bg-red-50": color === "red",
        }
      )}
    >
      <div className={classNames(
        "flex items-center gap-2",
        {
          "text-yellow-800": color === "yellow",
          "text-green-800": color === "green",
          "text-red-800": color === "red",
        }
      )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>

        <strong className="block font-medium">
          {title}
        </strong>
      </div>

      <p className={classNames("mt-2 text-sm", {
        "text-yellow-700": color === "yellow",
        "text-green-700": color === "green",
        "text-red-700": color === "red",
      })}>{message}.</p>
    </div>
  );
};

export default Alert;
