import React, {useContext} from 'react';
import {Box, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Input from './Input';
import Note from "./Note";
import {AppContext} from "../../context/AppContext";

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ModalComponent from "./Modal";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar
}));

const BigLightIcon = styled(LightbulbOutlinedIcon)`
  font-size: 120px;
  color: #F5F5F5;
`

const BigLightTitle = styled(Typography)`
  color: #80868b;
  font-size: 22px;
`

const BigLightBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`

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

const NotesWorkspace = () => {
    const {notes,
        modal,
        searchedNotes,
        setNotes,
        setDeleteNotes,
        setClickedNote,
        setModal,
        search
    } = useContext(AppContext)

    const deleteSearchedNote = (note: Note) => {
        const filteredNotes = notes.filter((item: Note) => item.id !== note.id)
        setNotes(filteredNotes)
        setDeleteNotes((prevState: any) => [note, ...prevState])
    }

    const handleSearchedCardClick = (note: Note) => {
        const clickedNote = notes.filter((item: Note) => item.id === note.id)
        setClickedNote({...clickedNote[0]})
        setModal(true)
    }

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box sx={{p: 3, width: '100%'}}>
                <DrawerHeader />
                <Input />
                {!modal && !search && notes.length > 0 &&
                    <Grid container style={{marginTop: 16}}>
                        {notes.map((note: any) => (
                            <Grid item>
                                <Note note={note} key={note.id} />
                            </Grid>
                        ))}
                    </Grid>
                }
                {!modal && !search && notes.length === 0 &&
                    <BigLightBox>
                        <BigLightIcon/>
                        <BigLightTitle>Здесь будут ваши заметки</BigLightTitle>
                    </BigLightBox>
                }
                {modal && !search &&
                    <ModalComponent open={modal} />
                }
                {search && searchedNotes.length > 0 &&
                    <Grid container style={{marginTop: 16}}>
                        {searchedNotes.map((searchedNote: any) => (
                            <Grid item>
                                <CardContainer>
                                    <CardContent>
                                        <Typography>{searchedNote.title}</Typography>
                                        <Typography>{searchedNote.text}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <DeleteOutlineOutlinedIcon
                                            fontSize='small'
                                            style={{cursor: 'pointer'}}
                                            onClick={() => deleteSearchedNote(searchedNote)}
                                        />
                                    </CardActions>
                                </CardContainer>
                            </Grid>
                        ))}
                    </Grid>
                }
            </Box>
        </Box>
    );
};

export default NotesWorkspace;
