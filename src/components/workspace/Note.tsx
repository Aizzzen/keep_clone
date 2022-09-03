import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


import {styled} from "@mui/material/styles";

const CardContainer = styled(Card)`
  width: 240px;
  margin: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: none;
`

interface NoteProps {
    note: {
        id: number;
        title: string;
        text: string;
    }
}

const Note = ({note}: NoteProps) => {
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
                />
                <DeleteOutlineOutlinedIcon
                    fontSize='small'
                />
            </CardActions>
        </CardContainer>
    );
};

export default Note;
