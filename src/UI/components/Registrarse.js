import { useState } from "react";

export function Registrarse (){

const [user, setUser] = useState({
  email:'',
  password:'',
});


 const handleChange = (e) => {
  console.log(e.target.name, e.target.value);
 }

  return(

    <form>
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