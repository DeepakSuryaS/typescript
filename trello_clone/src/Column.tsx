import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import AddNewItem from './AddNewItem';
import { useAppState } from './AppStateContext';
import useItemDrag from './useItemDrag';
import Card from './Card';
import { ColumnContainer, ColumnTitle } from './styles';
import { ColumnProps } from './types';
import { DragItem } from './DragItem';
import isHidden from './utils/isHidden';

const Column = ({ text, index, id, isPreview }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } });
      item.index = hoverIndex;
    },
  });

  const { drag } = useItemDrag({ type: 'COLUMN', id, index, text });
  drag(drop(ref));

  return (
    <ColumnContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isHidden(isPreview, state.draggedItem, 'COLUMN', id)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state?.lists[index]?.tasks?.map((task, i) => (
        <Card id={task?.id} columnId={id} text={task?.text} key={task?.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={title => dispatch({ type: 'ADD_TASK', payload: { text: title, listId: id } })}
        dark
      />
    </ColumnContainer>
  );
};

export default Column;
