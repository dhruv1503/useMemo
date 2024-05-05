import React, {ReactNode} from "react"

interface ButtonProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string
  }

export default ButtonProps