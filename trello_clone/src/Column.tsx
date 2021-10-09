import React, { useRef } from 'react';
import AddNewItem from './AddNewItem';
import { useAppState } from './AppStateContext';
import useItemDrag from './useItemDrag';
import Card from './Card';
import { ColumnContainer, ColumnTitle } from './styles';
import { ColumnProps } from './types';

const Column = ({ title, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({ type: 'COLUMN', id, index, title });
  drag(ref);

  return (
    <ColumnContainer ref={ref}>
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
