import {styled} from "@mui/material/styles";

export const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar
}));
