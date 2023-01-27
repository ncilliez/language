import React, {useContext} from 'react';
import {monContexte} from '../context/langContext';
import LangContext from "../context/langContext";
import data from '../data';

export default function Contenu(){


   
    const {langEnCour} = useContext(monContexte);
 
    return ( 
       
       <div className='contenu'>
            <LangContext>
                <h1>{data[langEnCour].titre}</h1>
                <p>{data[langEnCour].contenu}</p>
            </LangContext>
       </div>
        )
};