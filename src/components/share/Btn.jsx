import React from "react";
import { Button } from "@nextui-org/react";
const Btn = ({
  textContent,
  onClick,
  type,
  variant,
  color,
  size,
  radius,
  startContent,
  endContent,
  spinner,
  spinnerPlacement,
  fullWidth,
  isIconOnly,
  isDisabled,
  isLoading,
  disableRipple,
  disableAnimation,
  onPress,
}) => {
  const handelClick = () => {
    onClick && onClick();
  };
  return (
    <Button
      onClick={handelClick}
      type={type}
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      startContent={startContent}
      endContent={endContent}
      spinner={spinner}
      spinnerPlacement={spinnerPlacement}
      fullWidth={fullWidth}
      isIconOnly={isIconOnly}
      isDisabled={isDisabled}
      isLoading={isLoading}
      disableRipple={disableRipple}
      disableAnimation={disableAnimation}
      onPress={onPress}
      
    >
      {textContent}
    </Button>
  );
};

export default Btn;
