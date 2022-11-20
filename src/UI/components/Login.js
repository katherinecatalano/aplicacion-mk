import React, { Component } from "react";
import firebase from '/firebase';


export default class Login extends Component {
    usuario: React.createRef();
    contraseña: React.createRef();

    constructor(props) {
        super(props);
        //el enlace es para que this funcione y vuleva el dato*/

        this.login = this.login.bind(this);
        this.signup = thi.signup.bind(this);
    }

    login(e) {
        e.preventDefault();
        var miusuario = this.usuario.current.value;
        var micontraseña = this.contraseña.current.value;

        firebase
            .auth()
            .createUserwithEmailAndPassword(miusuario, micontraseña)
            .then(u => {})

    }

};
}

}