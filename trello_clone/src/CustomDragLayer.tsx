import React from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';
import Column from './Column';
import { CustomDragLayerContainer } from './styles';
import { DragItem } from './DragItem';

const CustomDragLayer = () => {
  const {
    isDragging,
    currentOffset,
    item: { id, text, index },
  } = useDragLayer(monitor => ({
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getClientOffset(),
    item: monitor.getItem() as DragItem,
  }));

  return isDragging ? (
    <CustomDragLayerContainer>
      <Column id={id} text={text} index={index} isPreview={true} />
    </CustomDragLayerContainer>
  ) : null;
};

export default CustomDragLayer;
