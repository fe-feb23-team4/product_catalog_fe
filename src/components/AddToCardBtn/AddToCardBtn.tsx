import React, { useState } from 'react';
import cl from './AddToCardBtn.module.scss';

export const AddToCardBtn = () => {
  const [isAddToCard, setIsAddToCard] = useState(false);

  return (
    <button
      type="button"
      className={`${cl.button} ${isAddToCard ? cl.pressed : ''}`}
      onClick={() => setIsAddToCard(!isAddToCard)}
    >
      {isAddToCard ? 'Added' : 'Add to cart'}
    </button>
  );
};
