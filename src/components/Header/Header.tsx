import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [isActive] = useState(false);

  return (
    <header className={`${styles.header} ${isActive ? styles['header--active'] : ''}`}>
      <nav className={styles.header__nav}>
        <ul className={styles.header__navList}>
          <li className={styles.header__navItem}>
            <a href="/" className={styles.header__navLink}>Home</a>
          </li>
          <li className={styles.header__navItem}>
            <a href="/about" className={styles.header__navLink}>About</a>
          </li>
          {/* Додайте інші пункти меню */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
