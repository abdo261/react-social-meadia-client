import React, { useState } from "react";
import { Checkbox as CheckBoxNextui } from "@nextui-org/react";
const CheckBox = ({
  field,
  defaultValue,
  onChange,
  label,
  icon,
  size,
  color,
  radius,
  lineThrough,
  isSelected,
  isRequired,
  isReadOnly,
  isDisabled,
  isInvalid,
  disableAnimation,
  classNames,
  className,
}) => {
  const [value, setValue] = useState(defaultValue);
  const handelChange = (e) => {
    setValue(e.target.checked);
    field ? onChange(field, e.target.checked) : onChange(e.target.checked);
  };
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <CheckBoxNextui
      onChange={handelChange}
      value={value}
      icon={icon}
      size={size}
      color={color}
      radius={radius}
      lineThrough={lineThrough}
      isSelected={isSelected}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      disableAnimation={disableAnimation}
      classNames={classNames}
      className={className}
    >
      {label}
    </CheckBoxNextui>
  );
};

export default CheckBox;
