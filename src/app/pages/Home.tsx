import { Link } from "react-router-dom";
import { Header } from "../shared/components/Header/Header";
import { useState } from "react";
import { Button } from "../shared/components/Button";
import { useAppTheme } from "../shared/hooks/UseAppTheme";
import { useSidebar } from "../shared/hooks/UseSidebar";

// let countClick = 0;

export const Home = () => {
  // React Hook = Funções do React que servem para ADMINISTRAR o
  // Estado de um Componente, por exemplo o useState !!!

  // Permite GUARDAR uma Informação especificada que vai poder ser ATUALIZADA, e
  // sempre que essa Informação for Atualizada, vai RENDERIZAR no HTML, para poder
  // mostrar essa nova Informação !!!
  // ---------------------------------------
  // Colocar dentro do () o Valor INICIAL a ser Mostrado !!!
  // -------------------------------------------------------
  // O useState retorna um ARRAY, que retorna o Valor ATUAL no momento da Renderização e
  // outro que retorna uma Função que SETA um NOVO Valor para o Próprio Valor !!!
  const [countClick, setCountClick] = useState(0);

  const { toggleTheme } = useAppTheme();

  const { toggleSidebarOpen } = useSidebar();

  const incrementClickCount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("INCREMENTADO !!:", { countClick, event });
    setCountClick(countClick + 1);
  };

  const resetClickCount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("RESETADO !!:", { countClick, event });
    setCountClick(0);
  };

  return (
    <div>
      <Button
        text="Clique aqui para ALTERAR o Tema de Cores !"
        onClick={toggleTheme}
      ></Button>

      <br />

      <Button
        text="Clique aqui para ABRIR/FECHAR a Sidebar !"
        onClick={toggleSidebarOpen}
      ></Button>

      <h1>Minha página Home</h1>

      <Link to="/login">Página de Login</Link>
      <Header
        title="Título da página"
        subtitle="Subtítulo da página"
        variant="big-large"
      />

      <p>Números de cliques: {countClick}</p>
      <Button
        onClick={incrementClickCount}
        text="Clique aqui para INCREMENTAR o contador de cliques"
      />

      <br />

      <Button
        onClick={resetClickCount}
        text="Clique aqui para RESETAR o contador de cliques"
      ></Button>
    </div>
  );
};
