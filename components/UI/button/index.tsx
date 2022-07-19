import React from "react";
import s from "./button.module.scss";

type ButtonProps = {
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  disabled,
  ...props
}) => {
  return <button className={s.button}>{children}</button>;
};
