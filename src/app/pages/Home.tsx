import { Link } from "react-router-dom";
import { Header } from "../shared/components/Header";

export const Home = () => {
  return (
    <div>
      <h1>Minha página Home</h1>
      <Link to="/login">Página de Login</Link>
      <Header
        title="Título da página"
        subtitle="Subtítulo da página"
        variant="big-large"
      />
    </div>
  );
};
