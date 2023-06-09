import styles from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="/" className={styles.a}>
            Home
          </a>
        </li>

        <li className={styles.li}>
          <a href="/phones" className={styles.a}>
            Phones
          </a>
        </li>

        <li className={styles.li}>
          <a href="/tablets" className={styles.a}>
            Tablets
          </a>
        </li>

        <li className={styles.li}>
          <a href="/accesories" className={styles.a}>
            Accesories
          </a>
        </li>
      </ul>
    </nav>
  );
};
