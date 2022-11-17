import React from "react";
import { useState } from 'react';
import { savePersonName } from 'Listas';

function Registroincidencia() {

    const [personName, setPersonName] = useState(initialState null);

    const savePerson = () => {
        savePersonName(personName);
    }

    return ( <
<<<<<<< HEAD
    <h1> MK FIX </h1> <br/>
        
        <p> Registsro de incidencia </p>
    )
<ol> listas
    <li>categoria</li>
    <li></li>
</ol>

}
=======
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
>>>>>>> 980de1f4e962f8c231941b1b4b7b6fc9a7ea400d
