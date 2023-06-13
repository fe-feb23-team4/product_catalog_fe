import { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import cl from './BurgerMenu.module.scss';
import logo from '../../assets/Logo.svg';
import close from '../../assets/Close.svg';

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

  const handleClick = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <div
      className={menuClass}
      role="button"
      tabIndex={0}
      onKeyDown={handleClick}
      onClick={(e) => {
        if ((e.target as HTMLElement).tagName === 'A') {
          setIsBurgerActive(!isBurgerActive);
        }
      }}
    >
      <header className={cl.header}>
        <NavLink
          className={cl.logo}
          to="/"
          onClick={() => setIsBurgerActive(!isBurgerActive)}
        >
          <img src={logo} alt="logo_icon" />
        </NavLink>

        <button
          type="button"
          className={cl.close_button}
          onClick={() => setIsBurgerActive(!isBurgerActive)}
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
    </div>
  );
};
