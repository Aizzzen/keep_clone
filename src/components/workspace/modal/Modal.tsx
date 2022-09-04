import React, {useContext, useRef, useState} from 'react';
import Modal from '@mui/material/Modal'
import {Box, TextField} from "@mui/material";
import {AppContext} from "../../../context/AppContext";
import {InputsContainer, ModalButton, style} from "./ModalStyle";

interface NoteType {
    id: number;
    title: string;
    text: string;
}

interface ModalComponentProps {
    open: boolean;
}

const ModalComponent = ({open}: ModalComponentProps) => {
    const {notes, setNotes, setModal, clickedNote} = useContext(AppContext)
    const [currentNote, setCurrentNote] = useState(clickedNote)
    const modalContainerRef = useRef(document.createElement('div'))

    const handleClose = () => {
        const filteredNotes = notes.filter((item: NoteType) => item.id !== currentNote.id)
        const updatedNotes = [...filteredNotes, currentNote]
        setNotes(updatedNotes)
        setModal(false)
    }

    const onModalTextFieldChange = (e: any) => {
        const updatedNote = {
            ...currentNote,
            [e.target.name]: e.target.value
        }
        setCurrentNote(updatedNote)
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={{ ...style}}>
                <InputsContainer ref={modalContainerRef}>
                    <TextField
                        name='title'
                        placeholder='Введите заголовок'
                        value={currentNote.title}
                        variant='standard'
                        InputProps={{disableUnderline: true}}
                        style={{marginBottom: 10}}
                        onChange={(e) => onModalTextFieldChange(e)}
                    />
                    <TextField
                        name='text'
                        placeholder='Текст заметки...'
                        value={currentNote.text}
                        multiline
                        maxRows={Infinity}
                        variant='standard'
                        InputProps={{disableUnderline: true}}
                        // onClick={onTextFieldOpen}
                        onChange={(e) => onModalTextFieldChange(e)}
                    />
                </InputsContainer>
                <ModalButton
                    variant='text'
                    onClick={handleClose}
                >
                    Закрыть
                </ModalButton>
            </Box>
        </Modal>
    );
};

export default ModalComponent;
