import React, { SyntheticEvent } from 'react';
import './icon-button-style.scss';

type IconButtonProps = {
  onClick: (event: SyntheticEvent<Element, Event>) => void
};

export function IconButton({ onClick, children }: React.PropsWithChildren<IconButtonProps>) {
  return <button 
    className="icon-button"
    onClick={onClick}>
      {children}
    </button>;
}