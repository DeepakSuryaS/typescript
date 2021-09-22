import styled from 'styled-components';
import { AddItemButtonProps } from './types';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  align-items: flex-start;
  padding: 20px;
  background: #3179ba;
`;

export const ColumnContainer = styled.div`
  flex-grow: 0;
  width: 300px;
  min-height: 40px;
  padding: 8px;
  margin-right: 20px;
  border-radius: 3px;
  background: #ebecf0;
`;

export const CardContainer = styled.div`
  cursor: pointer;
  background: #fff;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  width: 100%;
  max-width: 300px;
  text-align: left;
  cursor: pointer;
  padding: 10px 12px;
  background: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${props => (props?.dark ? '#000' : '#fff')};
  transition: background 85ms ease-in;

  &:hover {
    background: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const NewItemInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;