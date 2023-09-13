import { useCallback, useState } from "react";
import { Button } from "../../../../shared/components/Button";

interface IListItem {
  name: string;
  edition: number;
  isSelected: boolean;
}

export const ListWithObjectsNote = () => {
  const [edition, setEdition] = useState<number>(1);
  const [selected, setSelected] = useState<boolean>(false);

  const nameList = "Lista";

  const [list, setList] = useState<IListItem[]>([
    { name: nameList, edition: 0, isSelected: selected },
  ]);

  const handleOnClick = useCallback((): void => {
    setEdition((oldEdition) => oldEdition + 1);
    setSelected(false); // Defina selected como false ao adicionar um novo item

    // Adicione um novo item com isSelected como false
    setList((oldList) => [
      ...oldList,
      { name: nameList, edition: edition, isSelected: false },
    ]);
  }, [edition]);

  const handleOnChange = useCallback(
    (index: number): void => {
      const currentList = [...list];

      // Se ao CLICAR no Checkbox e JÁ ESTIVER MARCADO, retorna "false" para
      // "isSelected" para DESMARCAR, se NÃO estiver Marcado, retorna "TRUE" para MARCAR !
      currentList[index].isSelected = currentList[index].isSelected
        ? false
        : true;

      // Atualiza a lista com o Estado ATUALIZADO
      setList(currentList);

      // Atualiza o estado GLOBAL de "selected" com base no estado do Item ESPECÍFICO
      setSelected(currentList[index].isSelected);
    },
    [list],
  );

  return (
    <div>
      <h1>Anotações sobre o uso de Listas !</h1>

      <Button text="Clique para adicionar uma Lista" onClick={handleOnClick} />

      <ul>
        {list.map(({ name, edition, isSelected }, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={isSelected}
              // Quando precisa passar PARÂMETROS para uma Função, PRECISA ser com
              // "() =>" ANTES da Função, se NÃO TIVER Parâmetros, pode passar DIRETAMENTE
              // a Função, exemplo apenas "handleOnChange" !!!
              onChange={() => handleOnChange(index)}
            />
            Nome: {name} || Edição: {edition} || Selecionado:{" "}
            {isSelected ? "Selecionado" : "Não selecionado"}
          </li>
        ))}
      </ul>
    </div>
  );
};
