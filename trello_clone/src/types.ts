import React from 'react';
import { AppState } from './AppStateContext';

export type ColumnProps = {
  text: string;
  index: number;
  id: string;
  isPreview?: boolean;
};

export type CardProps = {
  text: string;
  index: number;
  id: string;
  columnId: string;
  isPreview?: boolean;
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
  isPreview?: boolean;
};

export type InjectedProps = {
  initialState: AppState;
};

export type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export type AppStateProviderProps = {
  children: React.ReactNode;
  initialState: AppState;
};
