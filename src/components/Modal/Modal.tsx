/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import cl from './Modal.module.scss';
import close from '../../assets/Close.svg';
import { PhoneWithQuantity } from '../../types/Phone';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PhoneWithQuantity[];
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  return (
    <>
      {isOpen && (
        <div
          className={cl.modalOverlay}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          role="presentation"
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
        >
          <div className={cl.modalContent}>
            <div className={cl.modalHeader}>
              <h2 className={cl.modalTitle}>Your order has been sent !</h2>
              <button
                type="button"
                onClick={onClose}
                className={cl.closeButton}
              >
                <img src={close} alt="close" />
              </button>
            </div>
            <div className={cl.modalBody}>
              <p>Here is your shopping list: </p>
              <hr />
              <ul>
                {data.map((item) => {
                  return (
                    <li key={item.id} className={cl.modal__item}>
                      {item.name}
                      {' - '}
                      {item.quantity}
                      {' '}
                      {item.quantity === 1 ? 'item' : 'items'}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
