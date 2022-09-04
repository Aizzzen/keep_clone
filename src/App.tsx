import React, {useState} from 'react';
import AppContainer from "./components/AppContainer";
import { AppContext } from './context/AppContext';

function App() {
  const [notes, setNotes] = useState([])
  const [saveNotes, setSaveNotes] = useState([])
  const [deleteNotes, setDeleteNotes] = useState([])

  const [modal, setModal] = useState(false)
  const [clickedNote, setClickedNote] = useState(0)

    return (
    <AppContext.Provider value={{
      notes,
      setNotes,
      saveNotes,
      setSaveNotes,
      deleteNotes,
      setDeleteNotes,
      modal,
      setModal,
      clickedNote,
      setClickedNote
    }}>
        <AppContainer/>
    </AppContext.Provider>
  );
}

export default App;
