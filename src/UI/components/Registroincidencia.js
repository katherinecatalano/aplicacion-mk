import React from "react";
import { useState } from 'react';
import { savePersonName } from 'Listas';

function Registroincidencia() {

    const [personName, setPersonName] = useState(initialState null);

    const savePerson = () => {
        savePersonName(personName);
    }

    return ( <
        div classname = "incidencia" >
        <
        input type = "text"
        onChange = { e => setPersonName(e.target.value) }
        /> <button onclick = {}>Salvar</button >
        <
        /div >
    );
}

export default Registroincidencia;