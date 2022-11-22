import { useState } from "react";
import { useAuth } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";

export function Registrarse (){
  const [user, setUser] = useState({
  email:"",
  password:"",
});

 const { signup }  = useAuth()
 const navigate = useNavigate()

 const handleChange = ({target: {name,value}}) => 
  setUser({...user, [name]: value})
 
 const handleSubmit = e => {

  e.preventDefault()
  try{
    signup(user.email, user.password)
    navigate('/')

  }catch(error){

  }
  signup(user.email, user.password); 
}
  return(

    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" placeholder="youremail@company.ltd"
      onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password|" 
       onChange={handleChange}
      />

      <button>Registrarse</button>

    </form>

  )

}