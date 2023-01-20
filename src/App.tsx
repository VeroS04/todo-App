import { Outlet } from "react-router-dom";
import { Button, Footer, Header, Main, Menu } from "./components";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Main>
        <div>
          <Outlet />
          <Button 
            variant="dark" 
            icon="x-circle"
            handleClick={() => { console.log("Enviar") }}
          >
            Enviar
          </Button>

          <Button 
            variant="primary"
            icon="alarm"
            handleClick={() => { console.log("iniciar sesión") }}
          >
            Iniciar Sesión
          </Button>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default App;