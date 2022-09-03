import React, {useContext} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Input from './Input';
import Note from "./Note";
import {AppContext} from "../../context/AppContext";

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

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

const NotesWorkspace = () => {
    const {notes} = useContext(AppContext)

    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box sx={{p: 3, width: '100%'}}>
                <DrawerHeader />
                <Input />
                {notes.length > 0
                    ?
                    <Grid container style={{marginTop: 16}}>
                        {notes.map((note: any) => (
                            <Grid item>
                                <Note note={note} />
                            </Grid>
                        ))}
                    </Grid>
                    :
                    <BigLightBox>
                        <BigLightIcon/>
                        <BigLightTitle>Здесь будут ваши заметки</BigLightTitle>
                    </BigLightBox>
                }
            </Box>
        </Box>
    );
};

export default NotesWorkspace;
