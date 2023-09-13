import { ChangeEvent, useState } from "react";
import { Button } from "../../../shared/components/Button";
import { findCEPService } from "../../../shared/services/services/cep/findCEPService";
import { ApiException } from "../../../shared/services/api/ApiException";

export const ConsumeAPINote = () => {
  const [inputCEP, setInputCEP] = useState("");
  const [CEP, setCEP] = useState("");
  const [showHtmlCEP, setShowHtmlCEP] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputCEP(event.target.value);
  };

  const handleOnClick = async (): Promise<void> => {
    const response = await findCEPService(inputCEP);

    if (response instanceof ApiException) {
      setCEP("Não encontrado !");
    } else {
      setCEP(response.localidade);
    }

    setShowHtmlCEP(true);
  };

  return (
    <div>
      <h1>Anotações sobre Consumo de API !</h1>

      <p>Digite um CEP abaixo para buscar as informações de uma cidade</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          placeholder="Digite um CEP válido"
          type="number"
          value={inputCEP}
          onChange={handleOnChange}
        />
        <Button text="Buscar" onClick={handleOnClick}></Button>
      </div>

      {/* "showHtmlCEP &&" significa que se o "showHtmlCEP" for TRUE, retorna ALGO, nesse caso
      o "<p>CEP: {CEP}</p>" !! */}
      {showHtmlCEP && <p>CEP: {CEP}</p>}
    </div>
  );
};
