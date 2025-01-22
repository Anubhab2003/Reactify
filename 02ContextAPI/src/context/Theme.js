import {createContext,useContext} from 'react';



export const ThemeContext=createContext({
    themeMode:"light",//Variable
    darkTheme:()=>{},//Methord
    lightTheme:()=>{},//Methord
});

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
} 

