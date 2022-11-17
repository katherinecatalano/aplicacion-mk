import React from "react";
function Login (){

    return (
       
            <div>
                <h1>MK FIX</h1>
            <h3>Inicio de sesion</h3>
            <h3>Registrarse</h3>

            <div>
                {/* <label htmlFor="numero">numero de dni</label><br/> */}
                {/* <input type="text" id="numero" name="numero" placeholder="Introduzca su N° de dni"></input> */}
                <button nombre="Numero de DNI" place="***"> login</button> 
               
            </div>
            <div>
                 <button type="submit">Aceptar</button>
                <button className="registrar-login" to="/Registro">¿no tienes cuenta? Registrate </button>
            </div>


            </div>
    )
};

export default Login;