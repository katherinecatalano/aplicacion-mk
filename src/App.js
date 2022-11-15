import React, { Fragment } from 'react';
import './App.css';
import Registro from './UI/components/Registro';
import Login from './UI/components/Login'; 
import Pantalla1 from './UI/components/Pantalla1';
import Incidencia from './UI/components/Incidencia';
/*import Listas from './UI/components/Listas';*/
import Registroincidencia from './UI/components/Registroincidencia';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Boton from './UI/components/Boton';

export default function App() {
  return (
    <div>
      {Router}
    <Fragment>
    
      <view>
      <Registro></Registro>
      <Login></Login>
      <Pantalla1></Pantalla1>
      <Incidencia></Incidencia>
        {/* <Listas></Listas> */}
      <Registroincidencia></Registroincidencia>
    </view>
    </Fragment>
    {Router}
    </div>


  )
}

function App() {
  return(
    <SafeAreaView style = {[styles.Container]}>

      <Boton></Boton>


    </SafeAreaView>

  
  )
}