import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Registrarse } from "./components/Registrarse";
import { Inicio } from "./components/Inicio";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";

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
          <Route path="/register" element={<Registrarse />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;