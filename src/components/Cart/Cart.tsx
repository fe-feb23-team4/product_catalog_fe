import React from 'react';
import cl from './Cart.module.scss';
import arrowLeft from '../../assets/ArrowLeft.svg';

export const Cart = () => {
  return (
    <div className={`${cl.cart_container} `}>
      <button
        className={cl.go_back_button}
        type="button"
        onClick={() => window.history.back()}
      >
        <img src={arrowLeft} alt="arrow_left" className={cl.arrow_left} />
        <span className={cl.span}>Back</span>
      </button>

      <h2 className={cl.cart_title}>Cart</h2>

      <ul className={cl.cart_list}>
        <li>asd</li>
        <li>asd</li>
        <li>asd</li>
      </ul>
    </div>
  );
};
