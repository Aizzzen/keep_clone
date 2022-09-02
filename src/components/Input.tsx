import React, {useState} from 'react';
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
`

const Input = () => {
    const [isTextFieldOpen, setIsTextFieldOpen] = useState(false)

    return (
        <ClickAwayListener onClickAway={() => setIsTextFieldOpen(false)}>
            <InputsContainer>
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
                    onClick={() => setIsTextFieldOpen(true)}
                />
            </InputsContainer>
        </ClickAwayListener>
    );
};

export default Input;
