import React, {FC} from 'react';
import Layout from "../components/layout/Layout";
import WorkSpace from './workspace/notesWorkspace/NotesWorkspace'
import {AppBox} from "./AppContainerStyle";

const AppContainer:FC = () => {
    return (
        <AppBox>
            <Layout />
            <WorkSpace />
        </AppBox>
    );
}

export default AppContainer;
