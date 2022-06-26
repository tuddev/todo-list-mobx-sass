import React from 'react';
import './typography-style.scss';

type TypographyProps = {
  elementType?: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  large?: boolean;
  bold?: boolean;
  center?: boolean;
};

export function Typography({ children, elementType, bold, large, center }: React.PropsWithChildren<TypographyProps>) {
  const Element = elementType ?? 'div';

  const additionalClasses = `
    ${bold ? 'typography--bold' : ''}
    ${large ? 'typography--large' : ''}
    ${center ? 'typography--center' : ''}
  `;
  
  return <Element className={`typography ${additionalClasses}`}>
    {children}
  </Element>;
}