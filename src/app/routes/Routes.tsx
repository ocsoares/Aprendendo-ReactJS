import { Route, Routes as ReactRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/login/Login";
import { UseRefNote } from "../pages/learning-notes/use-ref-note/UseRefNote";
import { ChildrenNote } from "../pages/learning-notes/children/ChildrenNote";
import { UseContextNote } from "../pages/learning-notes/use-context/UseContextNote";
import { CustomHookNote } from "../pages/learning-notes/custom-hook/CustomHookNote";
import { FunctionsInUseContextNote } from "../pages/learning-notes/use-context/functions-in-use-context/FunctionsInUseContextNote";
import { StatesInUseContextNote } from "../pages/learning-notes/use-context/states-in-use-context/StatesInUseContextNote";
import { ListsNote } from "../pages/learning-notes/lists/ListsNote";
import { ListWithObjectsNote } from "../pages/learning-notes/lists/list-with-objects/ListWithObjectsNote";
import { ConsumeAPINote } from "../pages/learning-notes/consume-api/ConsumeAPINote";
import { StylesMaterialUINote } from "../pages/learning-notes/styles-materialui/StylesMaterialUINote";

export const Routes = () => {
  return (
    <ReactRouter>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/notes/useref" element={<UseRefNote />} />
      <Route path="/notes/children" element={<ChildrenNote />} />
      <Route path="/notes/usecontext" element={<UseContextNote />} />
      <Route path="/notes/custom-hook" element={<CustomHookNote />} />
      <Route
        path="/notes/functions-in-use-context"
        element={<FunctionsInUseContextNote />}
      />
      <Route
        path="/notes/states-in-use-context"
        element={<StatesInUseContextNote />}
      />
      <Route path="/notes/lists" element={<ListsNote />} />
      <Route
        path="/notes/lists-with-objects"
        element={<ListWithObjectsNote />}
      />
      <Route path="/notes/consume-api" element={<ConsumeAPINote />} />
      <Route
        path="/notes/styles-materialui"
        element={<StylesMaterialUINote />}
      />

      {/* Toda Rota que NÃO for especificada A CIMA será REDIRECIONADA para a página "home" !!!  */}
      <Route path="*" element={<Navigate to="home" />} />
    </ReactRouter>
  );
};
