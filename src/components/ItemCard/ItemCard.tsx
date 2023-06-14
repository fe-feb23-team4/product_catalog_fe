import cn from 'classnames';
import cl from './ItemCard.module.scss';

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

export const ItemCard = () => {
  return (
    <div className={cl.itemCard}>
      <div className={cl.grid}>
        <div
          className={cn(
            cl.grid__item,
            cl.grid__item__mobile_1_4,
            cl.grid__item__tablet_1_12,
            cl.grid__item__desktop_1_24,
          )}
        >
          <h1 className={cl.itemCard__title}>{phone.name}</h1>
        </div>
      </div>
    </div>
  );
};
