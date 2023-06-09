/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import cl from './CardItem.module.scss';
import { AddToCardBtn } from '../AddToCardBtn';
import { FavoriteBtn } from '../FavoriteBtn';
import { Phone } from '../../types/Phone';

interface Props {
  phone: Phone;
}
export const CardItem: React.FC<Props> = ({ phone }) => {
  const [isAddToCard, setIsAddToCard] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const navigation = useNavigate();

  const handleNavigate = () => {
    navigation(`/phones/${phone.phoneId}`);
  };

  const handleAction = useCallback(
    (e: any, action: string) => {
      e.stopPropagation();
      if (action === 'addToCard') {
        setIsAddToCard((prevState) => !prevState);
        const storedCardItems = localStorage.getItem('AddedToCard');
        let phoneIds = storedCardItems ? JSON.parse(storedCardItems) : [];

        if (phoneIds.includes(phone.phoneId)) {
          phoneIds = phoneIds.filter(
            (id: string) => id !== phone.phoneId,
          );
        } else {
          phoneIds.push(phone.phoneId);
        }

        localStorage.setItem('AddedToCard', JSON.stringify(phoneIds));
      } else if (action === 'addToFavorite') {
        setIsFavorite((prevState) => !prevState);
        const storedFavoriteItems = localStorage.getItem('AddedToFavorite');

        let phoneIds = storedFavoriteItems
          ? JSON.parse(storedFavoriteItems)
          : [];

        if (phoneIds.includes(phone.phoneId)) {
          phoneIds = phoneIds.filter(
            (id: string) => id !== phone.phoneId,
          );
        } else {
          phoneIds.push(phone.phoneId);
        }

        localStorage.setItem('AddedToFavorite', JSON.stringify(phoneIds));
      }
    },
    [isAddToCard, isFavorite],
  );

  useEffect(() => {
    const storedCardItems = localStorage.getItem('AddedToCard');
    const phoneIds = storedCardItems ? JSON.parse(storedCardItems) : [];

    setIsAddToCard(phoneIds.includes(phone.phoneId));
  }, [phone.phoneId]);

  useEffect(() => {
    const storedFavoriteItems = localStorage.getItem('AddedToFavorite');
    const phoneIds = storedFavoriteItems ? JSON.parse(storedFavoriteItems) : [];

    setIsFavorite(phoneIds.includes(phone.phoneId));
  }, [phone.phoneId]);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div
      className={cl.cardItem}
      onClick={handleNavigate}
    >
      <div className={cl.cardItem__route}>
        <div className={cl.cardItem__img}>
          <img
            src={`https://product-catalog-be-s8k7.onrender.com/${phone.image}`}
            alt={phone.image.split('/')[2]}
          />
        </div>

        <div className={cl.cardItem__nameContainer}>
          <h3 className={cl.cardItem__name}>{phone.name}</h3>
        </div>
      </div>

      <div className={cl.cardItem__price}>
        <ins className={cl.cardItem__priceDiscount}>
          {`$${phone.price ? phone.price : phone.fullPrice}`}
        </ins>

        <del className={cl.cardItem__priceRegular}>
          {phone.price && `$${phone.fullPrice}`}
        </del>
      </div>

      <div className={cl.cardItem__params}>
        <div className={cl.cardItem__paramsName}>
          <p>Screen</p>
          <p>Capacity</p>
          <p>RAM</p>
        </div>

        <div className={cl.cardItem__paramsValue}>
          <p>{phone.screen}</p>
          <p>{`${phone.capacity.slice(0, -2)} ${phone.capacity.slice(-2)}`}</p>
          <p>{`${phone.ram.slice(0, -2)} ${phone.ram.slice(-2)}`}</p>
        </div>
      </div>

      <div className={cl.cardItem__btnContainer}>
        <AddToCardBtn
          isAddToCard={isAddToCard}
          handleAddToCard={(e: any) => handleAction(e, 'addToCard')}
        />
        <FavoriteBtn
          isFavorite={isFavorite}
          handleAddToFavorite={(e: any) => handleAction(e, 'addToFavorite')}
        />
      </div>
    </div>
  );
};
