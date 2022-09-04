import React, {useContext} from 'react';
import {CardActions, CardContent, Typography} from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {AppContext} from "../../../../context/AppContext";
import {CardContainer} from "./NoteStyle";


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
        <CardContainer>
            <CardContent onClick={handleCardClick}>
                <Typography>{note.title}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <NotificationsNoneOutlinedIcon
                    fontSize='small'
                    style={{marginLeft: 'auto'}}
                />
                <CreateOutlinedIcon
                    fontSize='small'
                />
                <ArchiveOutlinedIcon
                    fontSize='small'
                />
                <DeleteOutlineOutlinedIcon
                    fontSize='small'
                    style={{cursor: 'pointer'}}
                    onClick={() => deleteNote(note)}
                />
            </CardActions>
        </CardContainer>
    );
};

export default Note;
