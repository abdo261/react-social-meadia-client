import React from "react";
import { Button, useNavbar } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
const BtnAsLink = ({
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
  to,
  className
}) => {
  const navigate = useNavigate();
  const handelClick = () => {
    onClick && onClick();
    navigate(to);
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
      className={className}
    >
      <Link to={to}>{textContent}</Link>
    </Button>
  );
};

export default BtnAsLink;
