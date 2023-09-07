// import { useState } from "react";

import { Children } from "./assets/components/Children";
import { Header } from "./assets/components/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Header
        title={{ text: "Meu primeiro header React", color: "darkcyan" }}
        subtitle={{ text: "apenas um subtitulo...", color: "firebrick" }}
      /> */}

      <Header
        title="Meu primeiro header React"
        subtitle="apenas um subtitulo..."
      />
      <Header title="Qualquer coisa" subtitle="outra coisa kkk">
        <Children />
        <Children />
        <Children />
      </Header>
      <Header title="É isso ai mesmo" subtitle="seila" />
      <Header
        title="Apenas um título normal"
        subtitle="escrevi qualquer coisa"
      />
    </div>
  );
}

export default App;
