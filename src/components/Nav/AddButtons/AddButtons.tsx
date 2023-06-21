import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import cl from './AddButtons.module.scss';

import heart from '../../../assets/Heart.svg';
import cart from '../../../assets/Cart.svg';

export const AddButtons = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getFavData = () => {
      const storedItems = localStorage.getItem('AddedToFavorite');

      if (storedItems) {
        const parsedItems = JSON.parse(storedItems);

        setFavoriteItems(parsedItems);
      }
    };

    const intervalId = setInterval(getFavData);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const getCartData = () => {
      const storedItems = localStorage.getItem('AddedToCard');

      if (storedItems) {
        const parsedItems = JSON.parse(storedItems);

        setCartItems(parsedItems);
      }
    };

    const intervalId = setInterval(getCartData);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={cl.add_buttons}>
      <NavLink
        to="/favourite"
        className={({ isActive }) => cn(cl.button, { [cl.active]: isActive })}
      >
        <img src={heart} alt="heart_icon" />

        {favoriteItems.length !== 0 && (
          <div className={cl.count__button}>{favoriteItems.length}</div>
        )}
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) => cn(cl.button, { [cl.active]: isActive })}
      >
        <img src={cart} alt="cart_icon" />
        {cartItems.length !== 0 && (
          <div className={cl.count__button}>{cartItems.length}</div>
        )}
      </NavLink>
    </div>
  );
};
