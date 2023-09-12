import { useCallback, useState } from "react";
import { Button } from "../../../shared/components/Button";

export const ListsNote = () => {
  const [count, setCount] = useState<number>(1);

  const nameList = "Lista";

  const [list, setList] = useState<string[]>([`${nameList} 0`]);

  const handleOnClick = useCallback((): void => {
    setCount((oldCount) => oldCount + 1);

    // Retorna a ANTIGA Lista INTEIRA + O novo elemento no Array da Lista !!!
    setList((oldList) => [...oldList, `${nameList} ${count}`]);
  }, [count]);

  return (
    <div>
      <h1>Anotações sobre o uso de Listas !</h1>

      <Button text="Clique para adicionar uma Lista" onClick={handleOnClick} />

      <ul>
        {list.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};
