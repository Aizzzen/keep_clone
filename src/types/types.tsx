import {ReactNode} from "react";

export interface INote {
    id: number;
    title: string;
    text: string;
}

export interface ISidebar {
    id: number;
    name: string;
    icon: ReactNode;
}
