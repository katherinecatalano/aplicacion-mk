import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "firebase";


export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error ('There is no auth provider');
  return context;

}

export function AuthProvider({children}){
    /**todos los objetos hijos van a aparecer en const */
  
    const signup = (email, password) => createUserWithEmailAndPassword(Auth, email, password);

    return(
        /** El provider sirve para despues exportar los componentes*/
        <authContext.Provider value={{ signup }}>
            {children}
        </authContext.Provider>
    );
}
