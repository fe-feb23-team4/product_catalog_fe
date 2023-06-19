import { Link } from 'react-router-dom';
import cl from './CategorySection.module.scss';
import phonesImage from '../../assets/images/category-phones.png';
import tabletsImage from '../../assets/images/category-tablets.jpg';
import accessoriesImage from '../../assets/images/category-accessories.jpg';

export const CategorySection = () => {
  return (
    <div className={cl.category_section}>
      <h2 className={cl.category_section__title}>Shop by category</h2>
      <div className={cl.category_section__grid}>
        <Link
          to="/phones"
          className={cl.category_section__grid_item}
        >
          <div className={cl.image_container}>
            <img
              src={phonesImage}
              alt="phones"
              className={cl.category_section__grid_item__image}
            />
          </div>

          <h3 className={cl.category_section__grid_item__title}>
            Phones
          </h3>

          <p className={cl.category_section__grid_item__count}>
            95 models
          </p>
        </Link>

        <Link
          className={cl.category_section__grid_item}
          to="/tablets"
        >
          <div className={cl.image_container}>
            <img
              src={tabletsImage}
              alt="tablets"
              className={cl.category_section__grid_item__image}
            />
          </div>

          <h3 className={cl.category_section__grid_item__title}>
            Tablets
          </h3>

          <p className={cl.category_section__grid_item__count}>
            24 models
          </p>
        </Link>

        <Link
          className={cl.category_section__grid_item}
          to="/accessories"
        >
          <div className={cl.image_container}>
            <img
              src={accessoriesImage}
              alt="accessories"
              className={cl.category_section__grid_item__image}
            />
          </div>

          <h3 className={cl.category_section__grid_item__title}>
            Accessories
          </h3>

          <p className={cl.category_section__grid_item__count}>
            100 models
          </p>
        </Link>
      </div>
    </div>
  );
};
