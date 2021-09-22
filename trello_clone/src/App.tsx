import React from 'react';
import Card from './Card';
import Column from './Column';
import AddNewItem from './AddNewItem';
import { AppContainer } from './styles';

const App: React.FC = () => {
  return (
    <AppContainer>
      <Column title="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column title="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column title="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={text => console.log('Adding:', text)} />
    </AppContainer>
  );
}

export default App;
