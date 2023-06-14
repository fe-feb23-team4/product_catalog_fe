import cl from './FavoritePage.module.scss';
import { Breadscrumbs } from '../BreadScrumbs/BreadScrumbs';

export const FavoritePage = () => {
  const category = 'Favorites';

  return (
    <div className={cl.container}>
      <Breadscrumbs category={category} />
      <h1 className={cl.title}>Favorites</h1>
    </div>
  );
};
