import React, {FC, useContext, useState} from 'react';
import {AppContext} from "../../../context/AppContext";
import {
    CustomCloseIcon,
    CustomSearchIcon,
    Search,
    SearchIconWrapper,
    StyledInputBase
} from "./SearchStyles";
import {INote} from "../../../types/types";

const SearchComponent:FC = () => {
    const {notes, setSearchedNotes, search, setSearch} = useContext(AppContext)
    const [searchQuery, setSearchQuery] = useState<string>('')

    const noteSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
        setSearch(true)
        const filteredNotes = notes.filter((note: INote) => note.title.includes(e.target.value) || note.text.includes(e.target.value))
        setSearchedNotes(filteredNotes)
    }

    const cleanSearchedNotes = (e: React.MouseEvent<SVGSVGElement>) => {
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
                onChange={noteSearch}
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
