export type ColumnProps = {
  title: string;
  index: number;
};

export type CardProps = {
  text: string;
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
