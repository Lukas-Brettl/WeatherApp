import { Outlet, Link } from "react-router-dom";
import obrazek from "../images/weather.png"
const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm mt-2">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <img src={obrazek} alt="Logo" id="logo"/>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 pe-5" to="/">Domů</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 pe-5" to="/About">O nás</Link>
            </li>
            <li className="nav-item koncovka">
              <Link className="nav-link fs-5 " to="/Contact">Kontakty</Link>
            </li>
          </ul>
        </div>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout;