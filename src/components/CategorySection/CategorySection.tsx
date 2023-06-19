import cl from './CategorySection.module.scss';

export const CategorySection = () => {
  return (
    <div className={cl.category_section}>
      <h2 className={cl.category_section__title}>Shop by category</h2>
      <div className={cl.category_section__grid}>
        <div className={cl.category_section__grid__item}>
          <img src="https://via.placeholder.com/150" alt="phones" />
          <h3>Phones</h3>
          <p>95 models</p>
        </div>
        <div className={cl.category_section__grid__item}>
          <img src="https://via.placeholder.com/150" alt="phones" />
          <h3>Phones</h3>
          <p>95 models</p>
        </div>
        <div className={cl.category_section__grid__item}>
          <img src="https://via.placeholder.com/150" alt="phones" />
          <h3>Phones</h3>
          <p>95 models</p>
        </div>
      </div>
    </div>
  );
};
