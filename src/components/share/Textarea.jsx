import React, { useEffect, useState } from "react";
import { Textarea as TextareaNextui } from "@nextui-org/react";
const Textarea = ({
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
  minRows,
  maxRows,
  cacheMeasurements,
  disableAutosize,
  onHeightChange,
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
    <TextareaNextui
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
      minRows={minRows}
      maxRows={maxRows}
      cacheMeasurements={cacheMeasurements}
      disableAutosize={disableAutosize}
      onHeightChange={onHeightChange}
      id={field}
      autoFocus={autoFocus}
    />
  );
};

export default Textarea;
