import React, {FC, useContext, useRef, useState} from 'react';
import Modal from '@mui/material/Modal'
import {Box, TextField} from "@mui/material";
import {AppContext} from "../../../context/AppContext";
import {InputsContainer, ModalButton, style} from "./ModalStyle";
import {INote} from "../../../types/types";

interface ModalComponentProps {
    open: boolean;
}

const ModalComponent: FC<ModalComponentProps> = ({open}) => {
    const {notes, setNotes, setModal, clickedNote} = useContext(AppContext)
    const [currentNote, setCurrentNote] = useState<INote>(clickedNote)
    const modalContainerRef = useRef<HTMLDivElement>(document.createElement('div'))

    const handleClose = () => {
        const filteredNotes = notes.filter((item: INote) => item.id !== currentNote.id)
        const updatedNotes = [...filteredNotes, currentNote]
        setNotes(updatedNotes)
        setModal(false)
    }

    const onModalTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                        onChange={onModalTextFieldChange}
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
                        onChange={onModalTextFieldChange}
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
