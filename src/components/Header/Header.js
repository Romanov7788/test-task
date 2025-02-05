import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <Link to="/">
            <img src="/Vector.png" alt="Logo" />
          </Link>
        </div>

        <nav>
          <ul className="navList">
            <li>
              <Link
                to="/"
                className={`navList__text ${
                  location.pathname === '/' ? 'active' : ''
                }`}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/cursos"
                className={`navList__text ${
                  location.pathname.startsWith('/cursos') ? 'active' : ''
                }`}
              >
                Cursos
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={`navList__text ${
                  location.pathname === '/contato' ? 'active' : ''
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className="user-container">
          <div className="user-avatar">
            <Link to="/">
              <img src="/Avatar.png" alt="User" className="user-avatar-img" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
