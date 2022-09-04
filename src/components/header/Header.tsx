import React from 'react';
import {
    AppBar as MuiAppBar,
    AppBarProps as MuiAppBarProps,
    Toolbar,
    IconButton,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {styled} from "@mui/material/styles";
import logo from '../../assests/images/keepLogo.png'
import SearchComponent from "./search/Search";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: 1201,
    background: '#fff',
    height: '70px',
    boxShadow: 'inset 0 -1px 0 0 #dadce0',
}));

const Title = styled(Typography)`
  color: #5F6368;
  font-size: 20px;
  margin-left: 18px;
`

interface HeaderProps {
    open: boolean;
    handleDrawer: () => void;
}

const Header = ({open, handleDrawer}: HeaderProps) => {

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
