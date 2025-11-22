import React, { MouseEventHandler } from 'react';

interface ButtonProps extends React.PropsWithChildren {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button' }) => (
  <button onClick={onClick} type={type}>
    {children}
  </button>
);

export default Button;