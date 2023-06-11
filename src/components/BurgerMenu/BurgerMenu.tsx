import { FC } from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
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
  const menuClass = isBurgerActive ? `${cl.burger_menu} ${cl.active}` : cl.burger_menu;

  const handleClick = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <HashRouter>
      <div
        className={menuClass}
        role="button"
        tabIndex={0}
        onKeyDown={handleClick}
        onClick={(e) => {
          if ((e.target as HTMLElement).tagName === 'A') {
            handleClick();
          }
        }}
      >
        <header className={cl.header}>
          <NavLink className={cl.logo} to="/">
            <img src={logo} alt="logo_icon" />
          </NavLink>

          <button
            type="button"
            className={cl.close_button}
            onClick={handleClick}
          >
            <img src={close} alt="close_icon" />
          </button>
        </header>

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
      </div>
    </HashRouter>
  );
};
