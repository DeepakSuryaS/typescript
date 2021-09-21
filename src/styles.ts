import styled from 'styled-components';

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