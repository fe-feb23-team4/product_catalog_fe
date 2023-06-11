import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import cl from './Nav.module.scss';

export const Nav = () => {
  return (
    <HashRouter>
      <nav className={cl.nav}>
        <ul className={cl.ul}>
          <li className={cl.li}>
            <NavLink to="/" className={cl.a}>
              Home
            </NavLink>
          </li>

          <li className={cl.li}>
            <NavLink to="/phones" className={cl.a}>
              Phones
            </NavLink>
          </li>

          <li className={cl.li}>
            <NavLink to="/tablets" className={cl.a}>
              Tablets
            </NavLink>
          </li>

          <li className={cl.li}>
            <NavLink to="/accessories" className={cl.a}>
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
    </HashRouter>
  );
};
