import { FC } from "react";
import { NavLink } from "react-router-dom";

const Menu: FC = () => {
  return (
    <>
      <nav className="">
        <div className="main-menu" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories">
                Categorías
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories/save">
                Crear Categoría
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/entertainment">
                Entretenimiento
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Menu };