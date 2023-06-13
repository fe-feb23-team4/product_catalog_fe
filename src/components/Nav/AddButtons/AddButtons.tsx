import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import cl from './AddButtons.module.scss';

import heart from '../../../assets/Heart.svg';
import cart from '../../../assets/Cart.svg';

export const AddButtons = () => {
  return (
    <div className={cl.add_buttons}>
      <NavLink
        to="/favourite"
        className={({ isActive }) => cn(cl.button, { [cl.active]: isActive })}
      >
        <img src={heart} alt="heart_icon" />
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) => cn(cl.button, { [cl.active]: isActive })}
      >
        <img src={cart} alt="cart_icon" />
      </NavLink>
    </div>
  );
};
