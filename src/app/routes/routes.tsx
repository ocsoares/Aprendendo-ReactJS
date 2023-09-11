import {
  BrowserRouter,
  Route,
  Routes as ReactRouter,
  Navigate,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/login/Login";
import { UseRefNote } from "../pages/learning-notes/UseRefNote";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouter>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes/useref" element={<UseRefNote />} />

        {/* Toda Rota que NÃO for especificada A CIMA será REDIRECIONADA para a página "home" !!!  */}
        <Route path="*" element={<Navigate to="home" />} />
      </ReactRouter>
    </BrowserRouter>
  );
};
