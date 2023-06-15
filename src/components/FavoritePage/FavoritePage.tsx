import { useEffect, useState } from 'react';
import cl from './FavoritePage.module.scss';
import { Breadscrumbs } from '../BreadScrumbs/BreadScrumbs';

export const FavoritePage = () => {
  const category = 'Favorites';

  const [favoriteItems, setFavoriteItems] = useState([]);

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

  // eslint-disable-next-line no-console
  // console.log(favoriteItems);

  return (
    <div className={cl.container}>
      <Breadscrumbs category={category} />
      <h1 className={cl.title}>Favorites</h1>
    </div>
  );
};
