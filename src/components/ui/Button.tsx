import { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>  & {
  classes?: string
}

export const Button:FC<ButtonProps> = ({ children, classes, onClick, ...props }) => {

  const baseStyle = "btn px-4 py-2 rounded font-semibold";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${classes}`}
      {...props}
    >
      {children}
    </button>
  )
}
