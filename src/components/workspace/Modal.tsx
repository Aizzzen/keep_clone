import React, {useContext, useEffect, useRef, useState} from 'react';
import Modal from '@mui/material/Modal'
import {Box, Button, TextField} from "@mui/material";
import {AppContext} from "../../context/AppContext";
import {styled} from "@mui/material/styles";
import {random} from "../../utils/random";
import Note from "./Note";

const style = {
    position: 'absolute' as 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 150,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '8px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const InputsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 540px;
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  //box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  margin: auto;
  min-height: 30px;
`

const ModalButton = styled(Button)`
  display: flex;
  margin-left: auto;
  margin-top: 30px;
  color: #060817;
  &:hover, &:focus, &:active {
    background: none;
  }
`

const initialNote = {
    id: 0,
    title: '',
    text: ''
}

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
    console.log(clickedNote)

    // useEffect(() => {
    //     chosenNote(clickedNoteId)
    // }, [])

    const handleClose = () => {
        const filteredNotes = notes.filter((item: NoteType) => item.id !== currentNote.id)
        console.log(filteredNotes)
        const updatedNotes = filteredNotes.push(currentNote)
        setNotes(updatedNotes)
        // console.log(notes)
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
            // aria-labelledby="parent-modal-title"
            // aria-describedby="parent-modal-description"
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
                >Закрыть</ModalButton>
            </Box>
        </Modal>
    );
};

export default ModalComponent;
