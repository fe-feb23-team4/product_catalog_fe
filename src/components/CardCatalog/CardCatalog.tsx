import { CardItem } from '../CardItem/CardItem';
import cl from './CardCatalog.module.scss';

export const CardCatalog = () => {
  return (
    <div className={cl.product_catalog}>
      <div className={cl.grid}>
        <div className={cl.grid__item__1_6}>
          <CardItem />
        </div>
        <div className={cl.grid__item__7_12}>
          <CardItem />
        </div>
        <div className={cl.grid__item__13_18}>
          <CardItem />
        </div>
        <div className={cl.grid__item__19_24}>
          <CardItem />
        </div>
      </div>
    </div>
  );
};
