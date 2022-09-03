import React, {useState} from 'react';
import AppContainer from "./components/AppContainer";
import { AppContext } from './context/AppContext';

function App() {
  const [notes, setNotes] = useState([])
  const [saveNotes, setSaveNotes] = useState([])
  const [deleteNotes, setDeleteNotes] = useState([])

  return (
    <AppContext.Provider value={{
      notes,
      setNotes,
      saveNotes,
      setSaveNotes,
      deleteNotes,
      setDeleteNotes
    }}>
        <AppContainer/>
    </AppContext.Provider>
  );
}

export default App;
