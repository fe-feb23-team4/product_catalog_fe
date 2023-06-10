import cl from './Header.module.scss';
import { Nav } from '../Nav/Nav';
import logo from '../../assets/Logo.svg';
import heart from '../../assets/Heart.svg';
import cart from '../../assets/Cart.svg';
import burger from '../../assets/Burger.svg';

const Header = () => {
  return (
    <header className={cl.header}>
      <a className={cl.logo} href="/">
        <img src={logo} alt="logo_icon" />
      </a>

      <Nav />

      <div className={cl.button_group}>
        <button type="button" className={`${cl.button} ${cl.heart}`}>
          <img src={heart} alt="heart_icon" />
        </button>

        <button type="button" className={`${cl.button} ${cl.cart}`}>
          <img src={cart} alt="cart_icon" />
        </button>

        <button type="button" className={`${cl.button} ${cl.burger}`}>
          <img src={burger} alt="burger_icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
