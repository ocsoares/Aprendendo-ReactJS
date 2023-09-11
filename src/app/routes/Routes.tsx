import {
  BrowserRouter,
  Route,
  Routes as ReactRouter,
  Navigate,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/login/Login";
import { UseRefNote } from "../pages/learning-notes/use-ref-note/UseRefNote";
import { ChildrenNote } from "../pages/learning-notes/children/ChildrenNote";
import { UseContextNote } from "../pages/learning-notes/use-context/UseContextNote";
import { CustomHookNote } from "../pages/learning-notes/custom-hook/CustomHookNote";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouter>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/notes/useref" element={<UseRefNote />} />
        <Route path="/notes/children" element={<ChildrenNote />} />
        <Route path="/notes/usecontext" element={<UseContextNote />} />
        <Route path="/notes/custom-hook" element={<CustomHookNote />} />

        {/* Toda Rota que NÃO for especificada A CIMA será REDIRECIONADA para a página "home" !!!  */}
        <Route path="*" element={<Navigate to="home" />} />
      </ReactRouter>
    </BrowserRouter>
  );
};
