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
        FirebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                /** usuario logeado*/
                this.setState({ user });
            } else {
                /**usuario no logeado */
                this.setState({ user: null });
            }
        });

    }
    render() {
        return ( <
            div className = 'App' > { this.state.user ? ( < home / > ) : ( < Login / > ) } <
            /div>
        );
    }
}