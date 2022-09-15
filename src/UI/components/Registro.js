import React, { Fragment } from "react";
import Input from "./Input";

export default function Registro (){
    return (
        <Fragment>
            <form>
                <h1>MK FIX</h1>
                <h3>Registro</h3>
                <p>Complete los siguientes datos</p>
                
                <div>
                    <Input nombre="Nombre Completo"  place="Nombre"></Input>
                </div>
                <div>
              

                    <Input nombre="Numero de DNI"  place="numero"></Input>

                </div>
                <div>
                    {/* <label htmlFor="correo">E-mail</label>
                    <br/>
                    <input type= "text" id="correo" name="correo" placeholder="correo electronico"></input> */}
                    <Input nombre="Correo Electronico" place="pepito@email.com"></Input>
                    

                </div>
                <div>
                    {/* <label htmlFor="contraseña">Contraseña</label>
                    <br/>
                    <input type="pasword" id="contraseña" name="contraseña" placeholder=""></input> */}
                    <Input nombre="Ingrese Contraseña" place="***"></Input>
                </div>
                <button type= "submit">Iniciar Sesion</button>
            </form>
        </Fragment>      
    )
}