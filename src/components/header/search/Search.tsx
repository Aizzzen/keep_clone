import React, {useContext, useState} from 'react';
import {AppContext} from "../../../context/AppContext";
import {styled} from "@mui/material/styles";
import {InputBase} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Search = styled('div')`
  position: relative;
  border-radius: 4px;
  background-color: #ededf1;
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

const CustomCloseIcon = styled(CloseOutlinedIcon)`
  width: 25px;
  height: 25px;
  color: #72737a;
  position: absolute;
  right: 15px;
  bottom: 14px;

  &:hover {
    background-color: #a3a3a6;
    border-radius: 20px;
  }
`

interface NoteType {
    id: number;
    title: string;
    text: string;
}

const SearchComponent = () => {
    const {notes, setSearchedNotes, search, setSearch} = useContext(AppContext)
    const [searchQuery, setSearchQuery] = useState('')

    const noteSearch = (e: any) => {
        setSearchQuery(e.target.value)
        setSearch(true)
        const filteredNotes = notes.filter((note: NoteType) => note.title.includes(e.target.value) || note.text.includes(e.target.value))
        setSearchedNotes(filteredNotes)
    }

    const cleanSearchedNotes = () => {
        setSearchedNotes([])
        setSearchQuery('')
        setSearch(false)
    }

    return (
        <Search>
            <SearchIconWrapper>
                <CustomSearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Поиск…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={(e) => noteSearch(e)}
            />
            {search && <CustomCloseIcon
                onClick={cleanSearchedNotes}
            />}
        </Search>
    );
};

export default SearchComponent;
