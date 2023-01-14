import { Outlet } from "react-router-dom";
import { Footer, Header, Main, Menu } from "./components";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Main>
        <div>
          <Outlet />
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default App;