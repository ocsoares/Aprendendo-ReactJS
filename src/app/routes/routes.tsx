import {
  BrowserRouter,
  Route,
  Routes as ReactRouter,
  Navigate,
} from "react-router-dom";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouter>
        <Route path="/home" element={<Home />} />
        <Route path="teste" element={<p>ola</p>} />

        {/* Toda Rota que NÃO for especificada A CIMA será REDIRECIONADA para a página "home" !!!  */}
        <Route path="*" element={<Navigate to="home" />} />
      </ReactRouter>
    </BrowserRouter>
  );
};
