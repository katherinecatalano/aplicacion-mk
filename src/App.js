import React, { } from 'react';
import './App.css';
import Registro from './UI/components/Registro';
import Login from './UI/components/Login'; 
import Pantalla1 from './UI/components/Pantalla1';
import Incidencia from './UI/components/Incidencia';
// import Listas from './UI/components/Listas';
import Registroincidencia from './UI/components/Registroincidencia';

export default function App() {
  return (

    <view>
       <Router>
        <div>
          <Routes>
            <Route exact path="/Login" element={<Registro />}/>
          </Routes>
        </div>
      </Router>
      
      <Registro></Registro>
      <Login></Login>
      <Pantalla1></Pantalla1>
      <Incidencia></Incidencia>
      <comentarios></comentarios>
      {/* <Listas></Listas> */}
      <Registroincidencia></Registroincidencia> 

    </view>

  )
}