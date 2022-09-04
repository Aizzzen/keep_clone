import React, {FC} from 'react';
import {BigLightBox, BigLightIcon, BigLightTitle} from "./EmptyStyle";

const Empty:FC = () => {
    return (
        <BigLightBox>
            <BigLightIcon/>
            <BigLightTitle>Здесь будут ваши заметки</BigLightTitle>
        </BigLightBox>
    );
};

export default Empty;
