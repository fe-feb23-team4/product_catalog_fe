/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-confusing-arrow */
import { useEffect, useState } from 'react';
import cl from './Cart.module.scss';
import arrowLeft from '../../assets/ArrowLeft.svg';
import close from '../../assets/Close.svg';
import { Modal } from '../Modal/Modal';
import { Phone } from '../../types/Phone';

interface PhoneWithQuantity extends Phone {
  quantity: number;
}

export const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([] as PhoneWithQuantity[]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const BASE_URL = 'https://product-catalog-be-s8k7.onrender.com';

  useEffect(() => {
    const cartItemsIds = localStorage.getItem('AddedToCard');
    let cartIds: number[] = [];

    if (cartItemsIds) {
      console.log(cartItemsIds);
      cartIds = JSON.parse(cartItemsIds) as number[];
    }

    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => data.filter((item: Phone) => cartIds?.includes(item.id)))
      .then((data) => {
        const cartItems = data.map((item: Phone) => ({ ...item, quantity: 1 }));

        setCart(cartItems);
      });
  }, []);

  function removeFromCart(item: PhoneWithQuantity) {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);

    localStorage.setItem(
      'AddedToCard',
      JSON.stringify(updatedCart.map((cartItem) => cartItem.id)),
    );

    setCart(updatedCart);
    setTotalPrice(totalPrice - item.price * item.quantity);
  }

  return (
    <div className={cl.cart}>
      <div className={cl.cart__container}>
        <button
          className={cl.go_back_button}
          type="button"
          onClick={() => window.history.back()}
        >
          <img
            src={arrowLeft}
            alt="arrow_left"
            className={cl.go_back_button__img}
          />
          <span className={cl.go_back_button__span}>Back</span>
        </button>

        <h2 className={cl.cart__title}>Cart</h2>

        {cart.length === 0 ? (
          <div className={cl.cart__empty}>
            <h1 className={cl.cart__empty_title}>Cart is empty</h1>
            <p className={cl.cart__empty_text}>
              You have not added anything to your cart yet
            </p>
          </div>
        ) : (
          <div className={cl.cart__page}>
            <ul className={cl.cart__list}>
              {cart.map((item) => (
                <li className={cl.cart__item} key={item.id}>
                  <div className={cl['cart__item_info']}>
                    <button
                      type="button"
                      className={cl.remove_button}
                      onClick={() => removeFromCart(item)}
                    >
                      <img src={close} alt="remove" className={cl.close} />
                    </button>

                    <img
                      src={`${BASE_URL}/${item.image}`}
                      alt={item.name}
                      className={cl['cart__item_info-image']}
                    />

                    <h3 className={cl['cart__item_info-name']}>{item.name}</h3>
                  </div>

                  <div className={cl.count_control}>
                    <button
                      type="button"
                      className={`${cl.count_control__button} ${cl.decrement}`}
                      onClick={() => {
                        // eslint-disable-next-line max-len
                        const updatedCart = cart.map((good) => good.id === item.id
                          ? { ...good, quantity: good.quantity - 1 }
                          : good);

                        if (item.quantity === 1) {
                          removeFromCart(item);

                          return;
                        }

                        setCart(updatedCart);
                        setTotalPrice(totalPrice - item.price);
                      }}
                    >
                      -
                    </button>

                    <input
                      className={`${cl.count_control__quantity} count`}
                      value={item.quantity}
                      type="text"
                      readOnly
                    />

                    <button
                      type="button"
                      className={`${cl.count_control__button} ${cl.increment}`}
                      onClick={() => {
                        // eslint-disable-next-line max-len
                        const updatedCart = cart.map((good) => good.id === item.id
                          ? { ...good, quantity: good.quantity + 1 }
                          : good);

                        setCart(updatedCart);
                        setTotalPrice(totalPrice + item.price);
                      }}
                    >
                      +
                    </button>

                    <div className={cl.count_control__total_price}>
                      $
                      {item.price * item.quantity}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className={cl.cart__total}>
              <h1 className={cl.cart__total_title}>
                $
                {cart.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0,
                )}
              </h1>

              <p className={cl.cart__total_quantity}>
                Total for
                {' '}
                {cart.reduce((total, item) => total + item.quantity, 0)}
                {' '}
                items
              </p>
              <div className={cl.cart__total_line}> </div>
              <button
                type="button"
                className={cl.cart__total_button}
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && <Modal isOpen onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
