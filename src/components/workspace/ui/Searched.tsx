import React, {useContext} from 'react';
import {AppContext} from "../../../context/AppContext";
import Container from "./container/Container";

interface Note {
    id: number;
    title: string;
    text: string;
}

interface SearchedProps {
    searchedNote: {
        id: number;
        title: string;
        text: string;
    },
}

const Searched = ({searchedNote}: SearchedProps) => {
    const {
        notes,
        searchedNotes,
        setSearchedNotes,
        setNotes,
        setDeleteNotes,
    } = useContext(AppContext)

    const deleteSearchedNote = (note: Note) => {
        const filteredNotes = notes.filter((item: Note) => item.id !== note.id)
        const filteredSearchedNotes = searchedNotes.filter((item: Note) => item.id !== note.id)
        setNotes(filteredNotes)
        setSearchedNotes(filteredSearchedNotes)
        setDeleteNotes((prevState: any) => [note, ...prevState])
    }

    return (
        <Container
            note={searchedNote}
            deleteNote={deleteSearchedNote}
        />
    );
};

export default Searched;
