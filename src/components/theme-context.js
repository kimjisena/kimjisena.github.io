import React from "react";

export const themes = {
    light: {
        background: 'bg-cool-white',
        icon: 'text-cool-white',
        iconbg: 'bg-cool-blue',
        H1: 'text-cool-blue',
        h1Border: 'border-cooler-black',
        pH2: 'text-cooler-black',
        sidehover: 'hover:text-dark-cool-green',
        headerbg: 'bg-cool-blue',
        headertxt: 'text-cool-white',
        sideborder: 'border-cool-white',
        footer: 'bg-cool-green'
    },
    dark: {
        background: 'bg-cool-dark',
        icon: 'text-dark-cool-white',
        iconbg: 'bg-dark-cool-blue',
        H1: 'text-dark-cooler-blue',
        h1Border: 'border-dark-cooler-black',
        pH2: 'text-dark-cooler-black',
        sidehover: 'hover:text-cool-green',
        headerbg: 'bg-dark-cool-blue',
        headertxt: 'text-dark-cool-white',
        sideborder: 'border-dark-cool-white',
        footer: 'bg-dark-cool-green'
    }
}

export const ThemeContext = React.createContext(themes.light);