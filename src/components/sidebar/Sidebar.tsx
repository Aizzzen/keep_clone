import React, {FC} from 'react';
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    List
} from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import {ISidebar} from "../../types/types";

interface SidebarProps {
    open: boolean;
}

const Sidebar:FC<SidebarProps> = ({open}) => {
    const sidebar: ISidebar[] = [
        {id: 1, name: 'Заметки', icon: <LightbulbOutlinedIcon/>},
        {id: 2, name: 'Напоминания', icon: <NotificationsNoneOutlinedIcon/>},
        {id: 3, name: 'Изменение ярлыков', icon: <CreateOutlinedIcon/>},
        {id: 4, name: 'Архив', icon: <ArchiveOutlinedIcon/>},
        {id: 5, name: 'Корзина', icon: <DeleteOutlineOutlinedIcon/>},
    ]

    return (
        <List>
            {sidebar.map((item: ISidebar) => (
                <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default Sidebar;
