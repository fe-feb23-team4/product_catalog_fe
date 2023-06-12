import { CardItem } from '../CardItem/CardItem';
import cl from './CardCatalog.module.scss';

export const CardCatalog = () => {
  return (
    <div className={cl.product_catalog}>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />

    </div>
  );
};
