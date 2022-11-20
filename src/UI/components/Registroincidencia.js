import React from "react";
import { useState, useEffect } from 'react';
import { savePersonName } from 'Listas';
import { createRoutesFromChildren } from "react-router-dom";

function Registroincidencia() {

    const [personName, setPersonName] = useState(initialState, null);
    const [persons, setPersons] = useState(initialState, null);

    const savePerson = () => {
        savePersonName(personName);

    }

    useEffect(effect() => {
        getPersonsData();

    }, deps: [])

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