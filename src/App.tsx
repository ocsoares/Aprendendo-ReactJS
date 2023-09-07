// import { useState } from "react";

import { Header } from "./assets/components/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header
        title="Meu primeiro header React"
        subtitle="apenas um subtitulo..."
        variant="small"
      />
      <Header
        title="Qualquer coisa"
        subtitle="outra coisa kkk"
        variant="medium"
      />
      <Header title="É isso ai mesmo" subtitle="seila" variant="large" />
      <Header
        title="Apenas um título normal"
        subtitle="escrevi qualquer coisa"
        variant="big-large"
      />
    </div>
  );
}

export default App;
