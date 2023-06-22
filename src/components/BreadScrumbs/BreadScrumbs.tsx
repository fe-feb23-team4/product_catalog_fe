import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon } from './HomeIcon';
import { Arrow } from './arrow';
import cl from './BreadScrumbs.module.scss';

interface Props {
  category: 'Phones' | 'Tablets' | 'Accessories' | 'Favorites';
  currentPage?: string;
}

export const Breadscrumbs: FC<Props> = ({ category, currentPage }) => {
  return (
    <div className={cl.breadcrumbs}>
      <NavLink to="/">
        <div className={cl.home_icon_wrapper}>
          <HomeIcon />
        </div>
      </NavLink>

      <Arrow />

      {currentPage ? (
        <>
          <NavLink to={`#/${category}`} className={cl.breadcrumbs__link}>
            {category}
          </NavLink>

          <Arrow />

          <span className={cl.breadcrumbs__text}>{currentPage}</span>
        </>
      ) : (
        <span className={cl.breadcrumbs__text}>{category}</span>
      )}
    </div>
  );
};

Breadscrumbs.defaultProps = {
  currentPage: '',
};
