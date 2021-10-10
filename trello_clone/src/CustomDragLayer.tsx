import React from 'react';
import { XYCoord, useDragLayer } from 'react-dnd';
import Column from './Column';
import Card from './Card';
import { CustomDragLayerContainer } from './styles';
import { DragItem } from './DragItem';

const getItemStyles = (currentOffset: XYCoord | null): React.CSSProperties => {
  if (!currentOffset) return { display: 'none' };

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
};

const CustomDragLayer = () => {
  const { isDragging, currentOffset, item } = useDragLayer(monitor => ({
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getClientOffset(),
    item: monitor.getItem() as DragItem,
  }));

  return isDragging ? (
    <CustomDragLayerContainer>
      <div style={getItemStyles(currentOffset)}>
        {item?.type === 'COLUMN' ? (
          <Column id={item?.id} text={item?.text} index={item?.index} isPreview={true} />
        ) : (
          <Card
            id={item?.id}
            text={item?.text}
            index={0}
            isPreview={true}
            columnId={item?.columnId}
          />
        )}
      </div>
    </CustomDragLayerContainer>
  ) : null;
};

export default CustomDragLayer;
