import React, { Component } from "react";
import firebaseConfig from './FirebaseConfig';


export default class Inicio extends Component {

    logout() {
        /*cierro sesion*/
        firebaseConfig.auth().signOut();
    }
    render() {
        return ( <
            div >
            <
            h1 > Pantalla inicio, crear incidencia < /h1> <button onClick = { this.logout } > Cerrar sesion </button > < /div>
        );
    }

}
