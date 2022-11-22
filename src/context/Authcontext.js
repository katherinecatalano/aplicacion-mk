import { createContext, useContext } from "react";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext)
  return context

}

export function AuthProvider({children}){
    /**todos los objetos hijos van a aparecer en const */
    const user = {
        login: true,
    }

    return(
        /** El provider sirve para despues exportar los componentes*/
        <authContext.Provider value={{user}}>
            {children}
    
        </authContext.Provider>
    );
}
