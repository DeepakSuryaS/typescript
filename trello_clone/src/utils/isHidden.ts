import { DragItem } from '../DragItem';

const isHidden = (draggedItem: DragItem | undefined, itemType: string, id: string): boolean => {
  return Boolean(draggedItem?.type === itemType && draggedItem?.id === id);
};

export default isHidden;
