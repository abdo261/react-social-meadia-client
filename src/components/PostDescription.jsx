"use client";
import React, { useState } from "react";

const PostDescription = ({ description }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="p-3">
        {description && (
          <>
            {" "}
            <div
              className={`w-full  ${
                showMore
                  ? " overflow-visible "
                  : "overflow-hidden text-ellipsis whitespace-nowrap "
              }`}
            >
              {description}
            </div>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-2 text-blue-500"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default PostDescription;
