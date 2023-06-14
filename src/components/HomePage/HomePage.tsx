import { CardItem } from '../CardItem';
import cl from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={cl.container}>
      <h1 className={cl.title}>Home page</h1>

      <CardItem />
    </div>
  );
};
