import React from 'react';
import type { Node } from 'react';

type Props = {
  children: Node,
  className?: string,
};

const Row = ({ children, className }: Props) => (
  <div className={`row ${className}`}>{children}</div>
);

Row.defaultProps = {
  className: '',
};

export default Row;
