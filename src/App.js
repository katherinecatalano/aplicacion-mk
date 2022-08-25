import React, {} from 'react';
import './App.css';
import Registro from './UI/components/Registro';
import Login from './UI/components/Login';
import Pantalla1 from './UI/components/Pantalla1';
import Incidencia from './UI/components/Incidencia';
// import Listas from './UI/components/Listas';

 export default function App() {
  return (
    
    <view>

      <Registro></Registro>
      <Login></Login>
      <Pantalla1></Pantalla1>
      <Incidencia></Incidencia>
      {/* <Listas></Listas> */}

    </view>

  )
  }