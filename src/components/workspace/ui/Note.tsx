import React, {FC, useContext} from 'react';
import {AppContext} from "../../../context/AppContext";
import Container from "./container/Container";
import {INote} from "../../../types/types";

interface NoteProps {
    note: INote
}

const Note:FC<NoteProps> = ({note}) => {
    const {
        notes,
        setNotes,
        setModal,
        setClickedNote
    } = useContext(AppContext)

    const deleteNote = (note: INote) => {
        const filteredNotes = notes.filter((item: INote) => item.id !== note.id)
        setNotes(filteredNotes)
    }

    const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const clickedNote = notes.filter((item: INote) => item.id === note.id)
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
