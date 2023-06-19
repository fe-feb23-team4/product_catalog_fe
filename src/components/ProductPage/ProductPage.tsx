import React from 'react';
import cl from './ProductPage.module.scss';
// import { useParams } from 'react-router-dom';
import arrowRight from '../../assets/ArrowRight.svg';
import arrowLeft from '../../assets/ArrowLeft.svg';
import home from '../../assets/Home.svg';

export const ProductPage = () => {
  return (
    <div className={cl.product_page}>
      <div className={cl.product_page__wrapper}>
        <div className={cl.product_page__breadcrumbs}>
          <div className={cl.product_page__breadcrumbs__item}>
            <img src={home} alt="home" />
          </div>

          <img src={arrowRight} alt="arrow" />

          <div className={cl.product_page__breadcrumbs__item}>
            <span>Phones</span>
          </div>

          <img src={arrowRight} alt="arrow" />

          <div className={cl.product_page__breadcrumbs__item}>
            <span>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</span>
          </div>

        </div>

        <button
          className={cl.product_page__back_btn}
          type="button"
        >
          <img src={arrowLeft} alt="arrow" />
          Back
        </button>

        <div className={cl.product_page__content}>
          <h1 className={cl.product_page__title}>
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </h1>

          <img src="https://via.placeholder.com/300x300" alt="phone" />
        </div>
      </div>
    </div>
  );
};
