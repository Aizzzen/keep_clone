import * as React from 'react';
import {Box} from '@mui/material';
import Header from '../header/Header';
import Sidebar from "../sidebar/Sidebar";
import {Drawer, DrawerHeader} from "./LayoutStyle";


const Layout = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
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
