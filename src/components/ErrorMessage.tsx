import React, { ReactNode } from 'react';
import { Heading } from './Heading';

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return <Heading extraStyles={{ color: 'red' }}>{children}</Heading>;
};
