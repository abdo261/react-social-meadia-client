import React, { useEffect, useState } from "react";
import { SelectItem, Select as SelectNextui } from "@nextui-org/react";
const Select = ({
  defaultValue,
  onChange,
  field,
  options,
  selectionMode,
  disabledKeys,
  variant,
  color,
  size,
  radius,
  placeholder,
  labelPlacement,
  label,
  description,
  errorMessage,
  startContent,
  endContent,
  selectorIcon,
  fullWidth,
  isOpen,
  defaultOpen,
  isRequired,
  isDisabled,
  isInvalid,
  showScrollIndicators,
  autoFocus,
  classNames,
  className,
}) => {
  const [value, setValue] = useState(defaultValue);
  const handelChange = (e) => {
    setValue(e.target.value);
    field ? onChange(field, e.target.value) : onChange(e.target.value);
  };
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <SelectNextui
      onChange={handelChange}
      value={value}
      id={field}
      selectionMode={selectionMode}
      disabledKeys={disabledKeys}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      placeholder={placeholder}
      labelPlacement={labelPlacement}
      label={label}
      description={description}
      errorMessage={errorMessage}
      startContent={startContent}
      endContent={endContent}
      selectorIcon={selectorIcon}
      fullWidth={fullWidth}
      isOpen={isOpen}
      defaultOpen={defaultOpen}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      showScrollIndicators={showScrollIndicators}
      autoFocus={autoFocus}
      classNames={classNames}
      className={className}
    >
      {options.map((o) => (
        <SelectItem value={o.key}>{o.value}</SelectItem>
      ))}
    </SelectNextui>
  );
};

export default Select;
