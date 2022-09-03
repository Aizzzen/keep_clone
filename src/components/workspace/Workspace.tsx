import React from 'react';
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import Input from './Input';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Workspace = () => {
    return (
        <Box sx={{display: 'flex', width: '100%'}}>
            <Box sx={{p: 3, width: '100%'}}>
                <DrawerHeader />
                <Input />
            </Box>
        </Box>
    );
};

export default Workspace;
