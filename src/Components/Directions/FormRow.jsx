import React from 'react';
import type { Node } from 'react';

type Props = {
  children: Node,
};

const FormRow = ({ children }: Props) => <div className="form-row">{children}</div>;

export default FormRow;
