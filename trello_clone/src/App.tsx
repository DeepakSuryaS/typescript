import React from 'react';
import Column from './Column';
import AddNewItem from './AddNewItem';
import { useAppState } from './AppStateContext';
import { AppContainer } from './styles';

const App: React.FC = () => {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state?.lists?.map((list, i) => (
        <Column title={list?.text} key={list?.id} index={i} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={text => console.log('Adding:', text)} />
    </AppContainer>
  );
}

export default App;
