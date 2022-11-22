import React from "react";
import { useState, useEffect } from 'react';
import { savePersonName } from 'Listas';

function Registroincidencia() {

    const [personName, setPersonName] = useState(initialState, null);
    const [persons, setPersons] = useState(initialState, null);

    const savePerson = () => {
        savePersonName(personName);

    }

    useEffect(effect() => {
        getPersonsData();

<<<<<<< HEAD
    
    } deps: []
=======
    }, deps: [])
>>>>>>> f1f42937e861173277116389e3b6af6d12c18e12

    const getPersonsData = async() {
        const p = await getPersons();
        console.log(p.docs[0].data());
        setPersons(p);

    }

    return ( <
        div className = "incidencia" >
        <
        input type = "text"
        onChange = { e => setPersonName(e.target.value) }
        /> <button onClick={savePerson}>Salvar</button >
        <
        /div>
    );
}

export default Registroincidencia;