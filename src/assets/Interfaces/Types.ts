import { ReactNode } from "react";

export interface TitleText {
    text : string;
    title : string
}
export interface BackIcon {
    wave: string;
    icon: ReactNode;
}

export interface RequestRepo {
    name: string;
    description: string;
    html_url : string;
}

export interface RequestDefault {
    title?: string;
    desc?: string;
    url: string;
}



export enum InputType {
    TEXT = 'text',
    NUM = 'number',
    DATE = 'date'
}