import React from 'react';
import Layout from "../components/layout/Layout";
import WorkSpace from './workspace/notesWorkspace/NotesWorkspace'
import {AppBox} from "./AppContainerStyle";

const AppContainer = () => {
    return (
        <AppBox>
            <Layout />
            <WorkSpace />
        </AppBox>
    );
}

export default AppContainer;
