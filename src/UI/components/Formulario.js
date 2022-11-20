import {useForm}  from "react-hook-form"



const Formulario = () => {


    const { register, handleSubmit }  = useForm ();



    return <div>
        <h2> Formulario</h2>
        <form>
            <div> 
                <label>Nombre</label>
                <input type= "text" name= ""/>
            </div>

            <div> 
                <label>Direccion</label>
                <input type= "text" name= ""/>
            </div>


            <div> 
                <label>Edad</label>
                <input type= "text" name= ""/>
            </div>


            <div> 
                <label>Pais</label>
                <select>
                    <option value="es">España</option>
                    <option value="it">italia</option>
                    <option value="">Argentina</option>
                    
                

            
                </select>
            </div>




        </form>

    </div>
}

export default Formulario;