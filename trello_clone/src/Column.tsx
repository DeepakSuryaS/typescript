import React from 'react';
import AddNewItem from './AddNewItem';
import { useAppState } from './AppStateContext';
import Card from './Card';
import { ColumnContainer, ColumnTitle } from './styles';
import { ColumnProps } from './types';

const Column = ({ title, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {state?.lists[index]?.tasks?.map((task, i) => (
        <Card text={task?.text} key={task?.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={text => dispatch({ type: 'ADD_TASK', payload: { text, listId: id } })}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
