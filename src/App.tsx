import React, {useState} from 'react';
import AppContainer from "./components/AppContainer";
import { AppContext } from './context/AppContext';

function App() {
  const [items, setItems] = useState([])
  const [saveItems, setSaveItems] = useState([])
  const [deleteItems, setDeleteItems] = useState([])

  return (
    <AppContext.Provider value={{
      items,
      setItems,
      saveItems,
      setSaveItems,
      deleteItems,
      setDeleteItems
    }}>
        <AppContainer/>
    </AppContext.Provider>
  );
}

export default App;
