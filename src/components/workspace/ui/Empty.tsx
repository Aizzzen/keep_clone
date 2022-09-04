import React from 'react';
import {styled} from "@mui/material/styles";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import {Box, Typography} from "@mui/material";

const BigLightIcon = styled(LightbulbOutlinedIcon)`
  font-size: 120px;
  color: #F5F5F5;
`

const BigLightTitle = styled(Typography)`
  color: #80868b;
  font-size: 22px;
`

const BigLightBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`

const Empty = () => {
    return (
        <BigLightBox>
            <BigLightIcon/>
            <BigLightTitle>Здесь будут ваши заметки</BigLightTitle>
        </BigLightBox>
    );
};

export default Empty;
