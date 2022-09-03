import React from 'react';
import Modal from '@mui/material/Modal'
import {Box} from "@mui/material";

interface ModalComponentProps {
    open: boolean;
}

const ModalComponent = ({open}: ModalComponentProps) => {
    return (
        <Modal
            open={open}
        >
            <Box>
                <h2>work</h2>
            </Box>
        </Modal>
    );
};

export default ModalComponent;
