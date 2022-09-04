import React, {FC} from 'react';
import {
    Toolbar,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../../assests/images/keepLogo.png'
import SearchComponent from "./search/Search";
import {AppBar, Title} from "./HeaderStyle";

interface HeaderProps {
    open: boolean;
    handleDrawer: React.MouseEventHandler<HTMLButtonElement>
}

const Header:FC<HeaderProps> = ({open, handleDrawer}) => {
    return (
        <AppBar open={open}>
            <Toolbar>
                <IconButton
                    onClick={handleDrawer}
                    edge="start"
                    sx={{
                        marginRight: 2,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt='logo' style={{ width: 28 }} />
                <Title>Keep clone</Title>
                <SearchComponent/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
