export type ColumnProps = {
  title: string;
  index: number;
  id: string;
};

export type CardProps = {
  text: string;
  index: number;
};

export type AddItemButtonProps = {
  dark?: boolean;
};

export type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export type NewItemFormProps = {
  onAdd(text: string): void;
};

export type DragPreviewContainerProps = {
  isHidden?: boolean;
};
