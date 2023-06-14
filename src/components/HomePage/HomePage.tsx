import cl from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={cl.container}>
      <div className={cl.grid}>
        <h1 className={`${cl.title} ${cl.grid__item} ${cl.grid__item__desktop_1_16} ${cl.grid__item__tablet_8_12}`}>Welcome to Nice Gadgets store!</h1>
      </div>

    </div>
  );
};
