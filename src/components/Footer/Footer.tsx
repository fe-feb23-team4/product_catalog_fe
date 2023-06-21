import { Link } from 'react-router-dom';
import cl from './Footer.module.scss';
import logo from './footer_logo.svg';
import arrow from './arrow.svg';

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={cl.footer}>
      <div className={cl.footer__container}>
        <Link className={cl.footer__image} to="/">
          <img src={logo} alt="logo_icon" />
        </Link>

        <div className={cl.footer__navlist}>
          <Link
            className={cl.footer__navItem}
            to="https://github.com/fe-feb23-team4/product_catalog_fe"
          >

            <p>Github</p>

          </Link>

          <Link
            className={cl.footer__navItem}
            to="/"
          >

            <p>Contacts</p>

          </Link>

          <Link
            className={cl.footer__navItem}
            to="/"
          >

            <p>Rights</p>

          </Link>
        </div>
        <div className={cl.footer__button__box}>
          <p className={cl.footer__button__box__text}>Back to top</p>
          <button
            type="button"
            className={cl.footer__button}
            onClick={handleScrollToTop}
          >
            <img src={arrow} alt="Button_icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};
