import React from 'react';
import AddNewItem from './AddNewItem';
import { useAppState } from './AppStateContext';
import Card from './Card';
import { ColumnContainer, ColumnTitle } from './styles';
import { ColumnProps } from './types';

const Column = ({ title, index }: ColumnProps) => {
  const { state } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
        {state?.lists[index]?.tasks?.map(task => (
          <Card text={task?.text} key={task?.id} />
        ))}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={text => console.log('Adding:', text)} dark />
    </ColumnContainer>
  )
}

export default Column;