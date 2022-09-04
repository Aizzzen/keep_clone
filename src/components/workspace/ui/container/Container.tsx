import React from 'react';
import {CardActions, CardContent, Typography} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {CardContainer} from "./ContainerStyle";

interface Note {
    id: number;
    title: string;
    text: string;
}

interface NoteProps {
    note: {
        id: number;
        title: string;
        text: string;
    },
    deleteNote: (note: Note) => void;
    handleCardClick?: () => void;
}

const Container = ({note, deleteNote, handleCardClick}: NoteProps) => {
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

export default Container;
