import React, {useState} from 'react';
import AppContainer from "./components/AppContainer";
import {AppContext} from './context/AppContext';

function App() {
  const [notes, setNotes] = useState([])
  const [deleteNotes, setDeleteNotes] = useState([])
  const [modal, setModal] = useState(false)
  const [clickedNote, setClickedNote] = useState(0)
  const [search, setSearch] = useState(false)
  const [searchedNotes, setSearchedNotes] = useState([])

    return (
      <AppContext.Provider value={{
        notes,
        setNotes,
        deleteNotes,
        setDeleteNotes,
        modal,
        setModal,
        clickedNote,
        setClickedNote,
        searchedNotes,
        setSearchedNotes,
        search,
        setSearch
      }}>
          <AppContainer/>
      </AppContext.Provider>
  );
}

export default App;
