import React, { Fragment } from "react";

export default function Registro (){
    return (
        <Fragment>
            <form>
                <h1>Registro</h1>
                <p>Complete los siguientes datos</p>
                
                <div>
                    <label htmlFor="nombre">Nombre completo</label>
                    <br/>
                    <input type="text" id="nombre" name="nombre" placeholder="pepito"></input>
                </div>
                <div>
                    <label htmlFor="dni">numero de dni</label>
                    <br/>
                    <input type="text" id="numero" name="numero" placeholder="**"></input>
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
                <label htmlFor="escuela">escuela</label>
                <br/>
                <input type="escuela" id="numero"name ="numero"placeholder=""></input>
            </form>
        </Fragment>      
    )
}