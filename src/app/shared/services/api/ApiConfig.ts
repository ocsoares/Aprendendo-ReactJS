import axios, { AxiosInstance } from "axios";

export const ApiConfig = (): AxiosInstance => {
  // Colocar uma URL Padrão para as Requisições para o BACKEND da Aplicação, por
  // Exemplo, para EVITAR sempre de ficar passando "https://anyurl.com/posts",
  // "https://anyurl.com/editions" e etc, COM ISSO vai ser Preciso passar Apenas
  // "/editions" e "/posts" !!!
  return axios.create({ baseURL: "https://viacep.com.br/ws" });
};
