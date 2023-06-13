import { useState } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import cl from './Header.module.scss';

import { Nav } from '../Nav/Nav';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { AddButtons } from '../Nav/AddButtons/AddButtons';

import logo from '../../assets/Logo.svg';
import burger from '../../assets/Burger.svg';

export const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <header className={cl.header}>
      <HashRouter>
        <Link className={cl.logo} to="/">
          <img src={logo} alt="logo_icon" />
        </Link>

        <Nav />

        <AddButtons />

        <button
          type="button"
          className={cl.burger}
          onClick={() => setIsBurgerActive(!isBurgerActive)}
        >
          <img src={burger} alt="burger_icon" />
        </button>

        <BurgerMenu
          isBurgerActive={isBurgerActive}
          setIsBurgerActive={setIsBurgerActive}
        />
      </HashRouter>
    </header>
  );
};
