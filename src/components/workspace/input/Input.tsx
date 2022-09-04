import React, {useRef, useState, useContext, FC} from 'react';
import {TextField, ClickAwayListener} from "@mui/material";
import {AppContext} from "../../../context/AppContext";
import {random} from "../../../utils/random";
import {InputsContainer} from "./InputStyle";
import {INote} from "../../../types/types";

const initialNote = {
    id: 0,
    title: '',
    text: ''
}

const Input:FC = () => {
    const [isTextFieldOpen, setIsTextFieldOpen] = useState<boolean>(false)
    const [currentNote, setCurrentNote] = useState<INote>(initialNote)
    const {setNotes} = useContext(AppContext)
    const inputContainerRef = useRef(document.createElement('div'))

    const onTextFieldOpen = (e: React.MouseEvent<HTMLInputElement>) => {
        setIsTextFieldOpen(true)
        inputContainerRef.current.style.minHeight = '100px'
    }

    const onClickAwayListener = (e: MouseEvent | TouchEvent) => {
        setIsTextFieldOpen(false)
        inputContainerRef.current.style.minHeight = '30px'
        setCurrentNote({...initialNote, id: random()})

        if(currentNote.title || currentNote.text) {
            setNotes((prevState: INote[]) => [currentNote, ...prevState])
        }
    }

    const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const createdNote = {
            ...currentNote,
            id: random(),
            [e.target.name]: e.target.value
        }
        setCurrentNote(createdNote)
    }

    return (
        <ClickAwayListener onClickAway={onClickAwayListener}>
            <InputsContainer ref={inputContainerRef}>
                {isTextFieldOpen &&
                <TextField
                    name='title'
                    placeholder='Введите заголовок'
                    value={currentNote.title}
                    variant='standard'
                    InputProps={{disableUnderline: true}}
                    style={{marginBottom: 10}}
                    onChange={onTextFieldChange}
                />
                }
                <TextField
                    name='text'
                    placeholder='Заметка...'
                    value={currentNote.text}
                    multiline
                    maxRows={Infinity}
                    variant='standard'
                    InputProps={{disableUnderline: true}}
                    onClick={onTextFieldOpen}
                    onChange={onTextFieldChange}
                />
            </InputsContainer>
        </ClickAwayListener>
    );
};

export default Input;
