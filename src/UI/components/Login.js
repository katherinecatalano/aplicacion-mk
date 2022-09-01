import React, { Fragment } from "react";

export default function Login (){

    return (
        <Fragment>
            <form>
            <h1>Inicio de sesion</h1>

            <div>
                <label htmlFor="numero">numero de dni</label><br/>
                <input type="text" id="numero" name="numero" placeholder="Introduzca su N° de dni"></input>
            </div>
            <div>
                <button></button>
            </div>

            <div>
            <input type="text" id="cerrar sesion"name="cerrar"placeholder=""></input>
            </div>


            </form>
        </Fragment>
    )
}