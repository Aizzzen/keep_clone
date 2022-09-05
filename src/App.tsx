import React, {FC, useState} from 'react';
import AppContainer from "./components/AppContainer";
import {AppContext} from './context/AppContext';
import {INote} from "./types/types";

const App:FC = () => {
    const [notes, setNotes] = useState<INote[]>([])
    const [modal, setModal] = useState<boolean>(false)
    const [clickedNote, setClickedNote] = useState<number>(0)
    const [search, setSearch] = useState<boolean>(false)
    const [searchedNotes, setSearchedNotes] = useState<INote[]>([])
    const [searchQuery, setSearchQuery] = useState<string>('')

    return (
        <AppContext.Provider value={{
            notes,
            setNotes,
            modal,
            setModal,
            clickedNote,
            setClickedNote,
            searchedNotes,
            setSearchedNotes,
            search,
            setSearch,
            searchQuery,
            setSearchQuery
        }}>
              <AppContainer/>
        </AppContext.Provider>
    );
}

export default App;
