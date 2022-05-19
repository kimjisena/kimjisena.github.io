import React from "react";

export const themes = {
    light: {
        background: 'bg-cool-white',
        icon: 'text-cool-white',
        iconbg: 'bg-cool-blue',
        H1: 'text-cool-blue',
        h1Border: 'border-cooler-black',
        pH2: 'text-cooler-black',
        footer: 'bg-cool-green',
        headerbg: 'bg-cool-blue',
        headertxt: 'text-cool-white'
    },
    dark: {
        background: 'bg-cool-dark',
        icon: 'text-dark-cool-white',
        iconbg: 'bg-dark-cool-blue',
        H1: 'text-dark-cooler-blue',
        h1Border: 'border-dark-cooler-black',
        pH2: 'text-dark-cooler-black',
        footer: 'bg-dark-cool-green',
        headerbg: 'bg-dark-cool-blue',
        headertxt: 'text-dark-cool-white'
    }
}

export const ThemeContext = React.createContext(themes.light);