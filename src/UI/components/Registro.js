import React, { Fragment } from "react";
import Input from "./Input";

export default function Registro (){
    return (
        <Fragment>
            <form>
                <h1>Registro</h1>
                <p>Complete los siguientes datos</p>
                
                <div>
                    <Input nombre="Nombre Completo"  place="pepito"></Input>
                </div>
                <div>
              

                    <Input nombre="Numero de DNI"  place="***"></Input>

                </div>
                <div>
                    <label htmlFor="correo">E-mail</label>
                    <br/>
                    <input type= "text" id="correo" name="correo" placeholder="correo electronico"></input>
                </div>
                <div>
                    <label htmlFor="contraseña">Contraseña</label>
                    <br/>
                    <input type="pasword" id="contraseña" name="contraseña" placeholder=""></input>
                </div>
                <button type= "submit">Iniciar Sesion</button>
            </form>
        </Fragment>      
    )
}