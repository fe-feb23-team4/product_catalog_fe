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
        <Link
          className={cl.footer__image}
          to="/"
          onClick={handleScrollToTop}
        >
          <img src={logo} alt="logo_icon" />
        </Link>

        <div className={cl.footer__navlist}>
          <Link
            className={cl.footer__navItem}
            to="https://github.com/fe-feb23-team4/product_catalog_fe"
            target="_blank"
          >

            <p>Github</p>

          </Link>

          <Link
            className={cl.footer__navItem}
            to="/"
            onClick={handleScrollToTop}
          >

            <p>Contacts</p>

          </Link>

          <Link
            className={cl.footer__navItem}
            to="/"
            onClick={handleScrollToTop}
          >

            <p>Rights</p>

          </Link>
        </div>
        <div className={cl.footer__button__box}>
          <button
            type="button"
            onClick={handleScrollToTop}
            className={cl.footer__button__box__text}
          >
            Back to top
          </button>
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
