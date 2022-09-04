import {styled} from "@mui/material/styles";
import {Box, Button} from "@mui/material";

export const style = {
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

export const InputsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 540px;
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  margin: auto;
  min-height: 30px;
`

export const ModalButton = styled(Button)`
  position: absolute;
  right: 30px;
  bottom: 5px;
  color: #060817;
  &:hover, &:focus, &:active {
    background: none;
  }
`
