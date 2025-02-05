import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Nav.scss";

const breadcrumbData = {
  "/": "Início",
  "/cursos": "Cursos",
  "/contato": "Contato",
};

const Nav = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const pageTitle = breadcrumbData["/" + pathParts[0]] || "Página"; 

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <h1 className="nav-title">{pageTitle}</h1>
        <ul className="navigation__list">
          <li>
            <Link to="/">
              <img src="/Home.png" alt="Home" className="navigation__icon" />
            </Link>
          </li>
          {pathParts.map((part, index) => (
            <React.Fragment key={index}>
              <li className="navigation__separator">/</li>
              <li className="navigation__current">
                {breadcrumbData["/" + part] || part}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
