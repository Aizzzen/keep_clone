import React, {useContext} from 'react';
import {Box, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Input from './Input';
import Note from "./ui/Note";
import {AppContext} from "../../context/AppContext";

import ModalComponent from "./Modal";
import Empty from "./ui/Empty";
import Searched from "./ui/Searched";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar
}));

const NotesWorkspace = () => {
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
                        {notes.map((note: any) => (
                            <Grid item>
                                <Note
                                    note={note}
                                    key={note.id}
                                />
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
                        {searchedNotes.map((searchedNote: any) => (
                            <Grid item>
                                <Searched
                                    searchedNote={searchedNote}
                                    key={searchedNote.id}
                                />
                            </Grid>
                        ))}
                    </Grid>
                }
            </Box>
        </Box>
    );
};

export default NotesWorkspace;
