import React, { Fragment } from "react";
import Input from "./Input";

export default function Login (){

    return (
        <Fragment>
            <form>
                <h1>MK FIX</h1>
            <h3>Inicio de sesion</h3>

            <div>
                {/* <label htmlFor="numero">numero de dni</label><br/> */}
                {/* <input type="text" id="numero" name="numero" placeholder="Introduzca su N° de dni"></input> */}
                <Input nombre="Numero de DNI" place="***"></Input>
            </div>
            <div>
                 <button type="submit">Aceptar</button>
                <link className="registrar-login" to="/Registro">¿no tienes cuenta? Registrate </link>
            </div>


            </form>
        </Fragment>
    )
}