export type ColumnProps = {
  title: string;
}

export type CardProps = {
  text: string;
}

export type AddItemButtonProps = {
  dark?: boolean;
}

export type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
}