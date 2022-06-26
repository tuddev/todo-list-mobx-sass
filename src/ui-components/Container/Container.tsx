import React from 'react';
import './container-style.scss';

export function Container({ children }: React.PropsWithChildren) {
  return <div className="page">
    <div className="page__container container">
      {children}
    </div>
  </div>;
}