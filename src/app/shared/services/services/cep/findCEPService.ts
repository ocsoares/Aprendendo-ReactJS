import { ApiConfig } from "../../api/ApiConfig";
import { ApiException } from "../../api/ApiException";

interface ICEP {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const findCEPService = async (
  cep: string,
): Promise<ICEP | ApiException> => {
  try {
    const { data }: { data: ICEP } = await ApiConfig().get(`/${cep}/json/`);

    return data;
  } catch (error: any) {
    console.log(error);

    return new ApiException("CEP inválido !");
  }
};
