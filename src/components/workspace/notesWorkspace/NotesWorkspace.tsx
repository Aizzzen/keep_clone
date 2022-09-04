import React, {FC, useContext} from 'react';
import {Box, Grid} from "@mui/material";
import {AppContext} from "../../../context/AppContext";
import Input from '../input/Input';
import ModalComponent from "../modal/Modal";
import Empty from "../ui/empty/Empty";
import Note from "../ui/Note";
import Searched from "../ui/Searched";
import {DrawerHeader} from "./NotesWorkspaceStyle";
import {INote} from "../../../types/types";

const NotesWorkspace:FC = () => {
    const {
        notes,
        modal,
        searchedNotes,
        search
    } = useContext(AppContext)

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box sx={{p: 3, width: '100%'}}>
                <DrawerHeader />
                {!search && <Input/>}
                {!modal && !search && notes.length > 0 &&
                    <Grid container style={{marginTop: 16}}>
                        {notes.map((note: INote) => (
                            <Grid item key={note.id}>
                                <Note note={note} />
                            </Grid>
                        ))}
                    </Grid>
                }
                {!modal && !search && notes.length === 0 &&
                    <Empty/>
                }
                {modal && !search &&
                    <ModalComponent open={modal} />
                }
                {search && searchedNotes.length > 0 &&
                    <Grid container style={{marginTop: 16}}>
                        {searchedNotes.map((searchedNote: INote) => (
                            <Grid item key={searchedNote.id}>
                                <Searched searchedNote={searchedNote} />
                            </Grid>
                        ))}
                    </Grid>
                }
            </Box>
        </Box>
    );
};

export default NotesWorkspace;
