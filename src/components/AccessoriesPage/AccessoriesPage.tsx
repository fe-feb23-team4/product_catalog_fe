import { Breadscrumbs } from '../BreadScrumbs/BreadScrumbs';
import cl from './AccessoriesPage.module.scss';

export const AccessoriesPage = () => {
  return (
    <div className={cl.container}>
      <Breadscrumbs category="Accessories" />
      <h1 className={cl.title}>Accessories</h1>
      <span className={cl.models_amount}>0 models</span>
    </div>
  );
};
