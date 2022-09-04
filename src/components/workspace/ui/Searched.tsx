import React, {FC, useContext} from 'react';
import {AppContext} from "../../../context/AppContext";
import Container from "./container/Container";
import {INote} from "../../../types/types";

interface SearchedProps {
    searchedNote: INote
}

const Searched:FC<SearchedProps> = ({searchedNote}) => {
    const {
        notes,
        searchedNotes,
        setSearchedNotes,
        setNotes,
    } = useContext(AppContext)

    const deleteSearchedNote = (note: INote) => {
        const filteredNotes = notes.filter((item: INote) => item.id !== note.id)
        const filteredSearchedNotes = searchedNotes.filter((item: INote) => item.id !== note.id)
        setNotes(filteredNotes)
        setSearchedNotes(filteredSearchedNotes)
    }

    return (
        <Container
            note={searchedNote}
            deleteNote={deleteSearchedNote}
        />
    );
};

export default Searched;
