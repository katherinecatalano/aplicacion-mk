import { createContext } from "react";

const context = createContext();

export function AuthProvider({children}){

    /**todos los objetos hijos van a aparecer en const */
    const user = {
        login: true,
    }

    return(
        /** El provider sirve para despues exportar los componentes*/
        <context.Provider value={{user}}>
            {children}
    
        </context.Provider>
    );
}
