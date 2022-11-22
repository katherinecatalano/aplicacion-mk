
import {Routes, Route} from 'react-router-dom';
import { Inicio } from './UI/components/Inicio';
import {Login} from './UI/components/Login';
import {Registrarse} from './UI/components/Registrarse';
function App() {

  return(

    /**Este div solo le da color a todas las pantallas */
   <div className="bg-slate-300 h-screen text-white flex">
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/registrarse" element={<Registrarse/>}/>
      
    </Routes>
   </div>
  
  )
}

export default App;