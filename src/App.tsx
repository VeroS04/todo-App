import { Outlet } from "react-router-dom";
import { Button, Footer, Header, Main, Menu } from "./components";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Main>
        <div className="container">
          <Outlet />
            Iniciar Sesión
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default App;