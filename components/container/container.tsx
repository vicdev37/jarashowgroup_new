import React from "react";
import classNames from "classnames";
import s from "./container.module.scss";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => <div className={classNames(className, s.container)}>{children}</div>;
