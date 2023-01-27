
import React, {useContext} from 'react';
import {monContexte} from '../context/langContext';

export default function Langues(){
    const {changeLang} = useContext(monContexte);
    return ( 
        <div className='malist'>
            <img onClick={()=>changeLang(0)} src="icones/fr-FR.svg" alt="fr-FR.svg" />
            <img onClick={()=>changeLang(1)} src="icones/en-US.svg" alt="en-US.svg" />
            <img onClick={()=>changeLang(2)} src="icones/es-ES.svg" alt="es-ES.svg" />
        </div>
        )
};