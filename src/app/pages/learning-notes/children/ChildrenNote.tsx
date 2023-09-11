import { ButtonChildren } from "./components/ButtonChildren";
import { TextChildren } from "./components/TextChildren";

export const ChildrenNote = () => {
  return (
    <div>
      <h1>Rota sobre Children</h1>

      <ButtonChildren type="button">
        {/* QUALQUER Elemento aqui sem o {children} em "ButtonChildren" NÃO vai aparecer !!! */}
        <TextChildren text="Texto do CHILDREN !" />
        <TextChildren text="Texto do CHILDREN 2 !" />
        <TextChildren text="Texto do CHILDREN 3 !" />
        <TextChildren text="Texto do CHILDREN 4 !" />
        <h3>h3 do Children !</h3>
      </ButtonChildren>
    </div>
  );
};
