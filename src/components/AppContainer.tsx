import React from 'react';
import Layout from "../components/layout/Layout";
import WorkSpace from './workspace/NotesWorkspace'
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";

const AppBox = styled(Box)`
  display: flex;
  width: 100%;
`

const AppContainer = () => {
    return (
        <AppBox>
            <Layout />
            <WorkSpace />
        </AppBox>
    );
}

export default AppContainer;
