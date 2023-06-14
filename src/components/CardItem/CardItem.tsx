import { useCallback, useEffect, useState } from 'react';
import cl from './CardItem.module.scss';
import { AddToCardBtn } from '../AddToCardBtn';
import { FavoriteBtn } from '../FavoriteBtn';

const phone = {
  id: '1',
  category: 'phones',
  phoneId: 'apple-iphone-7-32gb-black',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: "4.7' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-11/red/00.jpg',
};

export const CardItem = () => {
  const [isAddToCard, setIsAddToCard] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAction = useCallback(
    (action: string) => {
      if (action === 'addToCard') {
        setIsAddToCard((prevState) => !prevState);
        const storedCardItems = localStorage.getItem('AddedToCard');
        let phoneIds = storedCardItems ? JSON.parse(storedCardItems) : [];

        if (phoneIds.includes(phone.id)) {
          phoneIds = phoneIds.filter((id: string) => id !== phone.id);
        } else {
          phoneIds.push(phone.id);
        }

        localStorage.setItem('AddedToCard', JSON.stringify(phoneIds));
      } else if (action === 'addToFavorite') {
        setIsFavorite((prevState) => !prevState);
        const storedFavoriteItems = localStorage.getItem('AddedToFavorite');

        let phoneIds = storedFavoriteItems
          ? JSON.parse(storedFavoriteItems)
          : [];

        if (phoneIds.includes(phone.id)) {
          phoneIds = phoneIds.filter((id: string) => id !== phone.id);
        } else {
          phoneIds.push(phone.id);
        }

        localStorage.setItem('AddedToFavorite', JSON.stringify(phoneIds));
      }
    },
    [isAddToCard, isFavorite],
  );

  useEffect(() => {
    const storedCardItems = localStorage.getItem('AddedToCard');
    const phoneIds = storedCardItems ? JSON.parse(storedCardItems) : [];

    setIsAddToCard(phoneIds.includes(phone.id));
  }, [phone.id]);

  useEffect(() => {
    const storedFavoriteItems = localStorage.getItem('AddedToFavorite');
    const phoneIds = storedFavoriteItems ? JSON.parse(storedFavoriteItems) : [];

    setIsFavorite(phoneIds.includes(phone.id));
  }, [phone.id]);

  return (
    <div className={cl.cardItem}>
      <div className={cl.cardItem__img}>
        <img
          src={`/product_catalog_fe/${phone.image}`}
          alt={phone.image.split('/')[2]}
        />
      </div>

      <h3 className={cl.cardItem__name}>{phone.name}</h3>

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
          handleAddToCard={() => handleAction('addToCard')}
        />
        <FavoriteBtn
          isFavorite={isFavorite}
          handleAddToFavorite={() => handleAction('addToFavorite')}
        />
      </div>
    </div>
  );
};
