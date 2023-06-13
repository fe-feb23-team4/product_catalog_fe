/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import cl from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={cl.nav}>
      <ul className={cl.ul}>
        <li className={cl.li}>
          <NavLink
            to="/"
            className={({ isActive }) => cn(cl.a, { [cl.active]: isActive })}
          >
            Home
          </NavLink>
        </li>

        <li className={cl.li}>
          <NavLink
            to="/phones"
            className={({ isActive }) => cn(cl.a, { [cl.active]: isActive })}
          >
            Phones
          </NavLink>
        </li>

        <li className={cl.li}>
          <NavLink
            to="/tablets"
            className={({ isActive }) => cn(cl.a, { [cl.active]: isActive })}
          >
            Tablets
          </NavLink>
        </li>

        <li className={cl.li}>
          <NavLink
            to="/accessories"
            className={({ isActive }) => cn(cl.a, { [cl.active]: isActive })}
          >
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
