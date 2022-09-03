import React from 'react';
import './App.css';
import AppContainer from "./components/AppContainer";
import WorkSpace from './components/workspace/Workspace'
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";

const AppBox = styled(Box)`
  display: flex;
  width: 100%;
`

function App() {
  return (
    <AppBox>
        <AppContainer />
        <WorkSpace />
    </AppBox>
  );
}

export default App;
