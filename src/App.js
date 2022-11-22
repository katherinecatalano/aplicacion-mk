import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./UI/components/Login"
import { Registrarse} from "./UI/components/Registrarse";
import { Inicio } from "./UI/components/Inicio";
import { ProtectedRoute } from "./UI/components/ProtectedRoute";

import { AuthProvider } from "./context/Authcontext";

function App() {
  return (
    <div className="bg-slate-300 text-black h-screen flex text-white">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Inicio />
              </ProtectedRoute>
            }
          />
          <Route path="/regisrarse" element={<Registrarse />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;