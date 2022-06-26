import React from 'react';
import { Typography } from '../Typography';
import './button-style.scss';

type ButtonProps = {
  onClick: VoidFunction;
  secondary?: boolean;
  active?: boolean;
  className?: string;
};

export function Button({ onClick, active, children, secondary, className }: React.PropsWithChildren<ButtonProps>) {
  const additinalClasses = `${active ? 'button--active' : ''} ${secondary ? 'button--secondary' : ''}`;

  return <button 
    className={`button ${additinalClasses} ${className ?? ''}`} 
    onClick={onClick}
  >
    <Typography>{children}</Typography>
</button>;
}