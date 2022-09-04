import React, {useContext} from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {styled} from "@mui/material/styles";
import {AppContext} from "../../../context/AppContext";

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
