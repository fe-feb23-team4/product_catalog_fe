import React, { useState } from 'react';
import cl from './FavoriteBtn.module.scss';

export const FavoriteBtn = () => {
  const [isFavorite, setIsFavorite] = useState(true);

  return (
    <button
      type="button"
      className={cl.button}
      onClick={() => setIsFavorite(!isFavorite)}
    >
      {!isFavorite
        ? (
          <img
            src="/product_catalog_fe/favorite.svg"
            alt="favor"
            className={isFavorite ? cl.pressed : ''}
          />
        )
        : (
          <img
            src="/product_catalog_fe/favorite2.svg"
            alt="favor"
            className={isFavorite ? cl.pressed : ''}
          />
        )}
    </button>
  );
};
