import React, {useRef, useState} from 'react';
import {Box, TextField, ClickAwayListener} from "@mui/material";
import {styled} from "@mui/material/styles";

const InputsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  margin: auto;
  min-height: 30px;
`

const Input = () => {
    const [isTextFieldOpen, setIsTextFieldOpen] = useState(false)

    const inputContainerRef = useRef(document.createElement('div'))

    const onTextFieldOpen = () => {
        setIsTextFieldOpen(true)
        inputContainerRef.current.style.minHeight = '100px'
    }

    const handleClickAwayListener = () => {
        setIsTextFieldOpen(false)
        inputContainerRef.current.style.minHeight = '30px'
    }

    return (
        <ClickAwayListener onClickAway={handleClickAwayListener}>
            <InputsContainer ref={inputContainerRef}>
                {isTextFieldOpen &&
                <TextField
                    placeholder='Введите заголовок'
                    variant='standard'
                    InputProps={{disableUnderline: true}}
                    style={{marginBottom: 10}}
                />
                }
                <TextField
                    placeholder='Заметка...'
                    multiline
                    maxRows={Infinity}
                    variant='standard'
                    InputProps={{disableUnderline: true}}
                    onClick={onTextFieldOpen}
                />
            </InputsContainer>
        </ClickAwayListener>
    );
};

export default Input;
