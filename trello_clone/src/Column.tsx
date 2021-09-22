import React from 'react';
import AddNewItem from './AddNewItem';
import { ColumnContainer, ColumnTitle } from './styles';
import { ColumnProps } from './types';

const Column = ({ title = '', children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={text => console.log('Adding:', text)} dark />
    </ColumnContainer>
  )
}

export default Column;