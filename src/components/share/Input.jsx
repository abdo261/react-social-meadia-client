import React, { useEffect, useState } from "react";
import { Input as InputNexui } from "@nextui-org/react";
const Input = ({
  type,
  defaultValue,
  onChange,
  field,
  variant,
  color,
  size,
  radius,
  placeholder,
  description,
  errorMessage,
  validate,
  startContent,
  endContent,
  label,
  labelPlacement,
  fullWidth,
  isClearable,
  isRequired,
  isReadOnly,
  isDisabled,
  isInvalid,
  className,
  classNames,
  style,
  autoFocus
}) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const handelChange = (e) => {
    setValue(e.target.value);
    field ? onChange(field, e.target.value) : onChange(e.target.value);
  };
  return (
    <InputNexui
    autoFocus={autoFocus}
      onChange={handelChange}
      value={value}
      type={type}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      placeholder={placeholder}
      description={description}
      errorMessage={errorMessage}
      validate={validate}
      startContent={startContent}
      endContent={endContent}
      label={label}
      labelPlacement={labelPlacement}
      fullWidth={fullWidth}
      isClearable={isClearable}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      className={className}
      classNames={classNames}
      style={style}
      id={field}
    />
  );
};

export default Input;
