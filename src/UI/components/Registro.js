import React,  from "react";
import Input from "./Input";
/*import { BrowseRouter as Router, Routes, Route,Link} from 'react-router-dom';*/

<<<<<<< HEAD
import './app.css';
export default function App (){
    return (
        <div>
                <h1>MK FIX</h1>
                <h3>Registro</h3>
                <p>Complete los siguientes datos</p>
                
                <div className="">
                    <Input nombre="Nombre Completo"  place="Nombre"></Input>
                    <Input id "nombre completo" name= "nombre" value ""</Input>
                
        </div>

                    nombre="Numero de DNI"  place="numero">

                
                <div>
                    {/* <label htmlFor="correo">E-mail</label>
                    <br/>
                    <input type= "text" id="correo" name="correo" placeholder="correo electronico"></input> */}
                    <Input nombre="Correo Electronico" place="pepito@email.com"></Input>
                    

                </div>

                <div>
                
                     <label htmlFor="contraseña">Contraseña</label>
                    <br/>
                    <input type="pasword" id="contraseña" name="contraseña" placeholder=""></input> 
                    <Input nombre="Ingrese Contraseña" place="***"></Input>
                
                <link className="registrar-login"  to="/Login">Login</link>
                 <button type= "submit">Iniciar Sesion</button>

                 </div>
        
=======

export default function Registro() {
    return ( <
        Fragment >
        <
        h1 > MK FIX < /h1> <
        h3 > Registro < /h3> <
        p > Complete los siguientes datos < /p>

        <
        div >
        <
        Input nombre = "Nombre Completo"
        place = "Nombre" > < /Input> <
        /div> <
        div >


        <
        Input nombre = "Numero de DNI"
        place = "numero" > < /Input>

        <
        /div> <
        div > {
            /* <label htmlFor="correo">E-mail</label>
                                <br/>
                                <input type= "text" id="correo" name="correo" placeholder="correo electronico"></input> */
        } <
        Input nombre = "Correo Electronico"
        place = "pepito@email.com" > < /Input>


        <
        /div> <
        div >
        <
        label htmlFor = "contraseña" > Contraseña < /label> <
        br / >
        <
        input type = "pasword"
        id = "contraseña"
        name = "contraseña"
        placeholder = "" > < /input>  <
        Input nombre = "Ingrese Contraseña"
        place = "***" > < /Input> <
        /div> <
        link className = "registrar-login"
        to = "/Login" > Login < /link> <
        button type = "submit" > Iniciar Sesion < /button> <
        /Fragment>
>>>>>>> 1b77393f4ce63acf9d214f5d55dc02f2c0835616
    )
}