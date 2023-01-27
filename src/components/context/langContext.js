import React, { createContext, useState } from 'react';
export const monContexte = createContext();
var langdefaut = 0;
switch (navigator.language)
        {
            case 'fr-FR':               
                langdefaut=0;
            break;
            
            case 'en-US':
                langdefaut=1;
            break;

            case 'es-ES':
                langdefaut=2;
            break;

            default:
                langdefaut=1;
        }



console.log('lang par defaut:'+ navigator.language)




export default function LangContext(props){

    // const [langEnCour, setLangEnCour] = useState(navigator.language);  
    const [langEnCour, setLangEnCour] = useState(langdefaut); 

    const changeLang = (newLang) => {
        setLangEnCour(newLang)
        console.log(newLang)
    }

    return (
        <monContexte.Provider value={{langEnCour, changeLang}}>
            {props.children}
        </monContexte.Provider>
    );
}