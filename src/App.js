import React, { Component } from 'react';
import Login from './UI/components/Formulario';
import Inicio from './UI/components/Inicio';
import { FirebaseApp } from 'firebase/app';

class App extends Component {

    state = {
        user: {}
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        /*se comprueba si el usuario se logeo*/
    }
}