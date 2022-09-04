import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import {styled} from "@mui/material/styles";
import {AppBar as MuiAppBar, Typography} from "@mui/material";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: 1201,
    background: '#fff',
    height: '70px',
    boxShadow: 'inset 0 -1px 0 0 #dadce0',
}));

export const Title = styled(Typography)`
  color: #5F6368;
  font-size: 20px;
  margin-left: 18px;
`
