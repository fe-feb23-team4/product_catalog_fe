/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import cl from './BurgerMenu.module.scss';
import logo from '../../assets/Logo.svg';
import close from '../../assets/Close.svg';
import heart from '../../assets/Heart.svg';
import cart from '../../assets/Cart.svg';

interface Props {
  isBurgerActive: boolean;
  setIsBurgerActive: (value: boolean) => void;
}

export const BurgerMenu: FC<Props> = ({
  isBurgerActive,
  setIsBurgerActive,
}) => {
  const menuClass = isBurgerActive
    ? `${cl.burger_menu} ${cl.active}`
    : cl.burger_menu;

  return (
    <div
      className={menuClass}
      onClick={(e) => {
        if (
          (e.target as HTMLElement).tagName === 'A'
          || (e.target as HTMLElement).tagName === 'IMG'
        ) {
          setIsBurgerActive(!isBurgerActive);
        }
      }}
    >
      <header className={cl.header}>
        <NavLink
          className={cl.logo}
          to="/"
        >
          <img src={logo} alt="logo_icon" />
        </NavLink>

        <button
          type="button"
          className={cl.close_button}
        >
          <img src={close} alt="close_icon" />
        </button>
      </header>

      <nav className={cl.nav}>
        <ul className={cl.ul}>
          <li className={cl.li}>
            <NavLink
              to="/"
              className={({ isActive }) => cn(cl.a, {
                [cl.active]: isActive,
              })}
            >
              Home
            </NavLink>
          </li>

          <li className={cl.li}>
            <NavLink
              to="/phones"
              className={({ isActive }) => cn(cl.a, {
                [cl.active]: isActive,
              })}
            >
              Phones
            </NavLink>
          </li>

          <li className={cl.li}>
            <NavLink
              to="/tablets"
              className={({ isActive }) => cn(cl.a, {
                [cl.active]: isActive,
              })}
            >
              Tablets
            </NavLink>
          </li>

          <li className={cl.li}>
            <NavLink
              to="/accessories"
              className={({ isActive }) => cn(cl.a, {
                [cl.active]: isActive,
              })}
            >
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={cl.add_buttons}>
        <NavLink
          to="/favourite"
          className={({ isActive }) => cn(cl.a, {
            [cl.active]: isActive,
          })}
        >
          <img src={heart} alt="favourite" />
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => cn(cl.a, {
            [cl.active]: isActive,
          })}
        >
          <img src={cart} alt="cart" />
        </NavLink>
      </div>
    </div>
  );
};
