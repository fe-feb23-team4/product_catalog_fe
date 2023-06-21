/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router';
import cl from './Cart.module.scss';
import arrowLeft from '../../assets/ArrowLeft.svg';
import close from '../../assets/Close.svg';
import { Modal } from '../Modal';
import { Phone, PhoneWithQuantity } from '../../types/Phone';
import { Loader } from '../Loader';
import { getPhoneById, getPhones } from '../../api/phones';

export const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([] as PhoneWithQuantity[]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigate();

  const handleNavigate = async (phoneId: number) => {
    const allPhones = await getPhones('1', '71', 'Name', 'phones');
    const { products } = allPhones.data;
    const foundProductId = products.find((product) => String(product.id) === String(phoneId))?.itemId;

    if (!foundProductId) {
      return;
    }

    const foundPhone = (await getPhoneById(foundProductId)).data;
    const foundPhoneId = foundPhone.id;

    navigation(`/phones/${foundPhoneId}`);
  };

  const BASE_URL = 'https://product-catalog-be-s8k7.onrender.com';

  useEffect(() => {
    const cartItemsIds = localStorage.getItem('AddedToCard');
    let cartIds: string[] = [];

    if (cartItemsIds) {
      cartIds = JSON.parse(cartItemsIds);

      if (cartIds.length) {
        setIsCartEmpty(false);
      }
    }

    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then(({ products }) => products
        .filter((item: Phone) => cartIds?.includes(String(item.id))
        || cartIds?.includes(item.phoneId)))
      .then((data) => {
        const cartItems = data.map((item: Phone) => ({ ...item, quantity: 1 }));

        setCart(cartItems);
        setIsLoading(false);
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

    if (updatedCart.length === 0) {
      setIsCartEmpty(true);
    }
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

        {isLoading ? (
          <div className={cl.loader_wrapper}>
            <Loader />
          </div>
        ) : (
          <>
            {isCartEmpty ? (
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
                      <div
                        className={cl.cart__item_info}
                        onClick={() => handleNavigate(item.id)}
                      >
                        <button
                          type="button"
                          className={cl.remove_button}
                          onClick={(event) => {
                            event.stopPropagation();
                            removeFromCart(item);
                          }}
                        >
                          <img src={close} alt="remove" className={cl.close} />
                        </button>

                        <img
                          src={`${BASE_URL}/${item.image}`}
                          alt={item.name}
                          className={cl['cart__item_info-image']}
                        />

                        <h3 className={cl['cart__item_info-name']}>
                          {item.name}
                        </h3>
                      </div>

                      <div className={cl.count_control}>
                        <button
                          type="button"
                          className={cn(
                            cl.count_control__button,
                            cl.decrement,
                            { [cl.decrement_disabled]: item.quantity === 1 },
                          )}
                          onClick={() => {
                            if (item.quantity === 1) {
                              return;
                            }

                            const updatedCart = cart
                              .map((good) => good.id === item.id
                                ? { ...good, quantity: good.quantity - 1 }
                                : good);

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
                            const updatedCart = cart
                              .map((good) => good.id === item.id
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
                    {`Total for 
                      ${cart.reduce((total, item) => total + item.quantity, 0)} 
                      items`}
                  </p>
                  <div className={cl.cart__total_line}> </div>
                  <button
                    type="button"
                    className={cl.cart__total_button}
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => {
                        setIsModalOpen(true);
                        setIsLoading(false);
                      }, 500);
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {isModalOpen && (
        <Modal
          isOpen
          onClose={() => {
            setIsModalOpen(false);
            localStorage.setItem('AddedToCard', JSON.stringify([]));
            setIsCartEmpty(true);
          }}
          data={cart}
        />
      )}
    </div>
  );
};
