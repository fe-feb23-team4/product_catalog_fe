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
        <a href="/home" className={cl.footer__image}>
          <img src={logo} alt="Footer_logo" />
        </a>
        <div className={cl.footer__navlist}>
          <a href="/" className={cl.footer__navItem}>
            Github
          </a>
          <a href="/" className={cl.footer__navItem}>
            Contacts
          </a>
          <a href="/" className={cl.footer__navItem}>
            rights
          </a>
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
