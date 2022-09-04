import React, {useContext} from 'react';
import {CardActions, CardContent, Typography} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {AppContext} from "../../../../context/AppContext";
import {CardContainer} from "./SearchedStyle";

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
        setClickedNote,
        setModal,
    } = useContext(AppContext)

    const deleteSearchedNote = (note: Note) => {
        const filteredNotes = notes.filter((item: Note) => item.id !== note.id)
        const filteredSearchedNotes = searchedNotes.filter((item: Note) => item.id !== note.id)
        setNotes(filteredNotes)
        setSearchedNotes(filteredSearchedNotes)
        setDeleteNotes((prevState: any) => [note, ...prevState])
    }

    const handleSearchedCardClick = () => {
        const clickedNote = notes.filter((item: Note) => item.id === searchedNote.id)
        setClickedNote({...clickedNote[0]})
        setModal(true)
    }

    return (
        <CardContainer>
            <CardContent onClick={handleSearchedCardClick}>
                <Typography>{searchedNote.title}</Typography>
                <Typography>{searchedNote.text}</Typography>
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
                    onClick={() => deleteSearchedNote(searchedNote)}
                />
            </CardActions>
        </CardContainer>
    );
};

export default Searched;
