import React, {useContext, useState} from 'react';
import {AppContext} from "../../../context/AppContext";
import {
    CustomCloseIcon,
    CustomSearchIcon,
    Search,
    SearchIconWrapper,
    StyledInputBase
} from "./SearchStyles";

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
            {search &&
                <CustomCloseIcon
                    onClick={cleanSearchedNotes}
                />
            }
        </Search>
    );
};

export default SearchComponent;
