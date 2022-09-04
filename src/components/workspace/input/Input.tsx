import React, {useRef, useState, useContext} from 'react';
import {TextField, ClickAwayListener} from "@mui/material";
import {AppContext} from "../../../context/AppContext";
import {random} from "../../../utils/random";
import {InputsContainer} from "./InputStyle";

const initialNote = {
    id: 0,
    title: '',
    text: ''
}

const Input = () => {
    const [isTextFieldOpen, setIsTextFieldOpen] = useState(false)
    const [currentNote, setCurrentNote] = useState(initialNote)
    const {setNotes} = useContext(AppContext)
    const inputContainerRef = useRef(document.createElement('div'))

    const onTextFieldOpen = () => {
        setIsTextFieldOpen(true)
        inputContainerRef.current.style.minHeight = '100px'
    }

    const onClickAwayListener = () => {
        setIsTextFieldOpen(false)
        inputContainerRef.current.style.minHeight = '30px'
        setCurrentNote({...initialNote, id: random()})

        if(currentNote.title || currentNote.text) {
            setNotes((prevState: any) => [currentNote, ...prevState])
        }
    }

    const onTextFieldChange = (e: any) => {
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
                    onChange={(e) => onTextFieldChange(e)}
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
                    onChange={(e) => onTextFieldChange(e)}
                />
            </InputsContainer>
        </ClickAwayListener>
    );
};

export default Input;
