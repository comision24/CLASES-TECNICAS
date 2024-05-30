import "./assets/css/app.css";
import { ContainerInfo } from "./components/ContainerInfo";
import { ContentWrapper } from "./components/ContentWrapper";
import { Sidebar } from "./components/Sidebar";

function App() {
  const itemsNav = [
    {
      id: 1,
      text: "Paginas",
      icon: "fa-folder",
      link: "/pages",
    },
    {
      id: 2,
      text: "Gráficos",
      icon: "fa-chart-area",
      link: "/charts",
    },
    {
      id: 3,
      text: "Tablas",
      icon: "fa-table",
      link: "/tables",
    },
  ];

  const comidas = ["Milanesas", "Fideos", "Papas"];

  return (
    <div id="wrapper">
      {/* Page Wrapper */}

      {/* Sidebar */}
      <Sidebar />
      {/* End of Sidebar */}

      {/*   <ContainerInfo>

        <h3>Estas son comidas</h3>

        {comidas.map((c, i) => (
          <p key={c + i}>{c}</p>
        ))}

      </ContainerInfo> */}

      {/* Content Wrapper */}
      <ContentWrapper />
      {/* End of Content Wrapper */}
      {/* End of Page Wrapper */}
    </div>
  );
}

export default App;
