import React, {useContext} from 'react';
import {
    AppBar as MuiAppBar,
    AppBarProps as MuiAppBarProps,
    Toolbar,
    IconButton,
    Typography, InputBase
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {styled} from "@mui/material/styles";
import logo from '../../assests/images/keepLogo.png'
import {AppContext} from "../../context/AppContext";

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

const Search = styled('div')`
  position: relative;
  border-radius: 4px;
  background-color: #e2e3f1;
  margin-left: 30px;
  width: 500px;
  min-height: 45px;
  &:hover {
    transition: .5s;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  }
  transition: .5s;
`

const SearchIconWrapper = styled('div')`
  padding: 0 5px;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledInputBase = styled(InputBase)`
  margin-left: 40px;
  color: #72737a;
  font-size: 18px;
  min-height: 50px;
`

const CustomSearchIcon = styled(SearchOutlinedIcon)`
  color: #72737a;
  margin-left: 5px;
`

interface NoteType {
    id: number;
    title: string;
    text: string;
}

interface HeaderProps {
    open: boolean;
    handleDrawer: () => void;
}

const Header = ({open, handleDrawer}: HeaderProps) => {
    const {notes, setSearchedNotes} = useContext(AppContext)

    const noteSearch = (e: any) => {
        const filteredNotes = notes.filter((note: NoteType) => note.title.includes(e.target.value) || note.text.includes(e.target.value))
        setSearchedNotes(filteredNotes)
    }

    const cleanSearchedNotes = () => {
        setSearchedNotes([])
    }

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
                <Search>
                    <SearchIconWrapper>
                        <CustomSearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Поиск…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => noteSearch(e)}
                    />
                    <button
                        onClick={cleanSearchedNotes}
                    >
                        X
                    </button>
                </Search>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
