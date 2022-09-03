import React, {useContext} from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


import {styled} from "@mui/material/styles";
import {AppContext} from "../../context/AppContext";

const CardContainer = styled(Card)`
  width: 240px;
  margin: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: none;
  &:hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  }
`

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
    const {notes, setNotes, setSaveNotes, setDeleteNotes, setModal} = useContext(AppContext)

    const saveNote = (note: Note) => {
        const filteredNotes = notes.filter((item: Note) => item.id !== note.id)
        setNotes(filteredNotes)
        setSaveNotes((prevState: any) => [note, ...prevState])
    }

    const deleteNote = (note: Note) => {
        const filteredNotes = notes.filter((item: Note) => item.id !== note.id)
        setNotes(filteredNotes)
        setDeleteNotes((prevState: any) => [note, ...prevState])
    }

    return (
        <CardContainer>
            <CardContent>
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
                    style={{cursor: 'pointer'}}
                    onClick={() => saveNote(note)}
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
