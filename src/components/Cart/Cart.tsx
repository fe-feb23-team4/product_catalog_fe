/* eslint-disable no-confusing-arrow */
import { useState } from 'react';
import cl from './Cart.module.scss';
import arrowLeft from '../../assets/ArrowLeft.svg';
import close from '../../assets/Close.svg';

const template = [
  {
    id: 1,
    name: 'iPhone 12 Pro Max',
    price: 1200,
    img: 'https://via.placeholder.com/50x50',
    description: '6.7-inch Super Retina XDR display1',
    color: 'Graphite',
    memory: '128GB',
    quantity: 4,
  },

  {
    id: 2,
    name: 'Samsung Galaxy S21 Ultra',
    price: 1400,
    img: 'https://via.placeholder.com/50x50',
    description: '6.8-inch Dynamic AMOLED 2X display',
    color: 'Phantom Black',
    memory: '256GB',
    quantity: 2,
  },

  {
    id: 3,
    name: 'Google Pixel 6 Pro',
    price: 999,
    img: 'https://via.placeholder.com/50x50',
    description: '6.7-inch QHD+ LTPO OLED display',
    color: 'Cloudy Gray',
    memory: '128GB',
    quantity: 2,
  },

  {
    id: 4,
    name: 'OnePlus 9 Pro',
    price: 899,
    img: 'https://via.placeholder.com/50x50',
    description: '6.7-inch Fluid AMOLED display',
    color: 'Morning Mist',
    memory: '256GB',
    quantity: 2,
  },

  {
    id: 5,
    name: 'Xiaomi Mi 11 Ultra',
    price: 1099,
    img: 'https://via.placeholder.com/50x50',
    description: '6.81-inch AMOLED Quad-curve display',
    color: 'Ceramic Black',
    memory: '512GB',
    quantity: 1,
  },
];

export const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState(template);

  return (
    <div className={cl.cart_container}>
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
        {cart.map((item) => (
          <li className={cl.cart_item} key={item.id}>
            <div className={cl.cart_item_info}>
              <img src={close} alt="close" className={cl.close} />
              <img
                src={item.img}
                alt={item.name}
                className={cl.cart_item_info_image}
              />
              <div className={cl.cart_item_info_details}>
                <h3 className={cl.cart_item_name}>{item.name}</h3>
                <p className={cl.cart_item_description}>{item.description}</p>
                <p className={cl.cart_item_price}>
                  Price:
                  {item.price}
                </p>
              </div>
            </div>
            <div className={cl.cart_item_count_control}>
              <button
                type="button"
                className={`${cl.count_control_button} ${cl.decrement}`}
                onClick={() => {
                  let updatedCart = cart.map(
                    (cartItem) => cartItem.id === item.id
                      ? { ...cartItem, quantity: cartItem.quantity - 1 }
                      : cartItem,
                  );

                  if (item.quantity === 1) {
                    updatedCart = cart.filter(
                      (cartItem) => cartItem.id !== item.id,
                    );
                  }

                  setCart(updatedCart);
                  setTotalPrice(totalPrice - item.price);
                }}
              >
                -
              </button>

              <input
                className={`${cl.count_control_button} count`}
                value={item.quantity}
                type="text"
                readOnly
              />

              <button
                type="button"
                className={`${cl.count_control_button} ${cl.increment}`}
                onClick={() => {
                  const updatedCart = cart.map((good) => good.id === item.id
                    ? { ...good, quantity: good.quantity + 1 }
                    : good);

                  setCart(updatedCart);
                  setTotalPrice(totalPrice + item.price);
                }}
              >
                +
              </button>
              <div className={cl.count_control_total_price}>
                $
                {item.price * item.quantity}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className={cl.cart_total}>
        <h1 className={cl.cart_total_title}>
          $
          {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </h1>

        <div className={cl.cart_total_count}>
          <p className={cl.cart_total_count_text}>
            Total for
            {' '}
            {cart.reduce((total, item) => total + item.quantity, 0)}
            {' '}
            items
          </p>
          {/* eslint-disable-next-line react/self-closing-comp */}
          <div className={cl.cart_total_count_line}></div>
          <button type="button" className={cl.cart_total_count_button}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
