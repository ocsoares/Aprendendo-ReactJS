import { ApiConfig } from "../../api/ApiConfig";
import { ApiException } from "../../api/ApiException";

// EXEMPLO !!!!!!

// Obviamente essa Interface deve estar em OUTRO Local !
interface IList {
  name: string;
  edition: number;
}

export const getEditionService = async (): Promise<IList | ApiException> => {
  try {
    const { data } = await ApiConfig().get("/editions");

    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erro ao consultar a API");
  }
};
