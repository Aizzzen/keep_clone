import React, {useContext} from 'react';
import {AppContext} from "../../../context/AppContext";
import Container from "./container/Container";

interface NoteProps {
    note: {
        id: number;
        title: string;
        text: string;
    }
}

interface Note {
    id: number;
    title: string;
    text: string;
}

const Note = ({note}: NoteProps) => {
    const {
        notes,
        setNotes,
        setDeleteNotes,
        setModal,
        setClickedNote
    } = useContext(AppContext)

    const deleteNote = (note: Note) => {
        const filteredNotes = notes.filter((item: Note) => item.id !== note.id)
        setNotes(filteredNotes)
        setDeleteNotes((prevState: any) => [note, ...prevState])
    }

    const handleCardClick = () => {
        const clickedNote = notes.filter((item: Note) => item.id === note.id)
        setClickedNote({...clickedNote[0]})
        setModal(true)
    }

    return (
        <Container
            note={note}
            deleteNote={deleteNote}
            handleCardClick={handleCardClick}
        />
    );
};

export default Note;
