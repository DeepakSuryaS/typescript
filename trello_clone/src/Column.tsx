import React from 'react';
import { ColumnContainer, ColumnTitle } from './styles';
import { ColumnProps } from './types';

const Column = ({ title = '', children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
    </ColumnContainer>
  )
}

export default Column;