// import React, { memo } from "react";
import React from "react";
import ButtonProps from "./ButtonProps";

// export const Button: React.FC<ButtonProps> = memo(({
//   children,
//   onClick = () => {},
//   className = ""
// }) => {
//   console.log(`button rendered => button text = ${children} rendered`);
//   return <button className={className} onClick={onClick}>{children}</button>;
// });

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick = () => {},
    className = ""
  }) => {
    console.log(`button rendered => button text = ${children} rendered`);
    return <button className={className} onClick={onClick}>{children}</button>;
  };
  
