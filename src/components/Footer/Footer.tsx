import styles from './Footer.module.scss';
import logo from './footer_logo.svg';
import arrow from './arrow.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__image}>
          <img src={logo} alt="Footer_logo" />
        </div>
        <div className={styles.footer__navlist}>
          <a href="/" className={styles.footer__navItem}>
            Github
          </a>
          <a href="/" className={styles.footer__navItem}>
            Contacts
          </a>
          <a href="/" className={styles.footer__navItem}>
            rights
          </a>
        </div>
        <div className={styles.footer__button__box}>
          <p className={styles.footer__button__box__text}>Back to top</p>
          <button
            type="button"
            className={styles.footer__button}
          >
            <img src={arrow} alt="Button_icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
