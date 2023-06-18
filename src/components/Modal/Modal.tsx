import React from 'react';
import cl from './Modal.module.scss';
import close from '../../assets/Close.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className={cl.modalOverlay}>
          <div className={cl.modalContent}>
            <div className={cl.modalHeader}>
              <h2 className={cl.modalTitle}>Modal Header</h2>
              <button
                type="button"
                onClick={onClose}
                className={cl.closeButton}
              >
                <img src={close} alt="close" />
              </button>
            </div>
            <div className={cl.modalBody}>
              <p>Modal content goes here</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
