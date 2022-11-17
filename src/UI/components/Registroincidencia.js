import React from "react";
import { useState } from 'react';

function Registroincidencia() {

    const [personName, setPersonName] = useState(initialState null);

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