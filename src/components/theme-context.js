import React from "react";

export const themes = {
    light: {
        background: 'bg-cool-white',
        icon: 'text-cool-white',
        iconbg: 'bg-cool-blue',
        H1: 'text-cool-blue',
        pH2: 'text-cool-black',
        footer: 'bg-cool-green'
    },
    dark: {
        background: 'bg-cool-dark'
    }
}

export const ThemeContext = React.createContext(themes.light);