import { Breadscrumbs } from '../BreadScrumbs/BreadScrumbs';
import cl from './TabletsPage.module.scss';

export const TabletsPage = () => {
  return (
    <div className={cl.container}>
      <Breadscrumbs category="Tablets" />
      <h1 className={cl.title}>Tablets</h1>
      <span className={cl.models_amount}>0 models</span>
    </div>
  );
};
