import React from 'react';
import type { Node } from 'react';

type Props = {
  size: string,
  children: Node,
  className?: string,
};

const Col = ({ size, children, className }: Props) => (
  <div
    className={`col-md-${size} col-xs-${size} col-xl-${size} col-lg-${size} col-sm-${size} ${className}`}
  >
    {children}
  </div>
);

Col.defaultProps = {
  className: '',
};

export default Col;
