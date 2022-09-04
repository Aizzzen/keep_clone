import * as React from 'react';
import {Box} from '@mui/material';
import Header from '../header/Header';
import Sidebar from "../sidebar/Sidebar";
import {Drawer, DrawerHeader} from "./LayoutStyle";
import {FC, useState} from "react";


const Layout:FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleDrawer = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOpen(prevState => !prevState);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Header open={open} handleDrawer={handleDrawer} />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader/>
                <Sidebar open={open} />
            </Drawer>
        </Box>
);
}

export default Layout;
