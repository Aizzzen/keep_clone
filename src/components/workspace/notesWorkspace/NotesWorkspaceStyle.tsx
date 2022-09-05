import {styled} from "@mui/material/styles";

export const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar
}));

export const NothingMessage = styled('div')`
  font-size: 15px;
  display: flex; 
  justify-content: center;
  align-items: center; 
  margin-top: 15px;
`
