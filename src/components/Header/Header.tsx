/* eslint-disable max-len */
import React from 'react';
import styles from './Header.module.scss';
import { Nav } from '../Nav/Nav';
import logo from '../../assets/Logo.svg';
import heartIcon from '../../assets/Heart-not-filled-icon.svg';
import cartIcon from '../../assets/Cart-icon.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <button type="button">
        <img src={logo} alt="Saint Coders Logo" />
      </button>

      <Nav />

      <button type="button">
        <img src={heartIcon} alt="Heart Icon" />
      </button>

      <button type="button" className={styles.header__button}>
        <img src={cartIcon} alt="Cart icon" />
      </button>
    </header>
  );
};

export default Header;
