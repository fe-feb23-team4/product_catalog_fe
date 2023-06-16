import { useEffect, useState } from 'react';
import cl from './FavoritePage.module.scss';
import { Breadscrumbs } from '../BreadScrumbs/BreadScrumbs';
import { getPhones } from '../../api/phones';
import { CardItem } from '../CardItem';
import { Phone } from '../../types/Phone';

export const FavoritePage = () => {
  const category = 'Favorites';

  const [favoriteItems, setFavoriteItems] = useState<number[]>([]);
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    const getFavData = () => {
      const storedItems = localStorage.getItem('AddedToFavorite');

      if (storedItems) {
        const parsedItems = JSON.parse(storedItems);

        setFavoriteItems(parsedItems);
      }
    };

    const intervalId = setInterval(getFavData);

    return () => {
      clearInterval(intervalId);
    };
  }, [favoriteItems]);

  useEffect(() => {
    const setVisiblePhones = async () => {
      const allPhones = await getPhones();

      setPhones(allPhones.data);
    };

    setVisiblePhones();
  }, []);

  const favoritePhones = phones
    .filter(phone => favoriteItems.includes(phone.id));

  return (
    <div className={cl.container}>
      <Breadscrumbs category={category} />
      <h1 className={cl.title}>Favorites</h1>
      <div className={cl.phones_container}>
        {favoritePhones.map((phone) => (
          <CardItem phone={phone} key={phone.id} />
        ))}
      </div>
    </div>
  );
};
