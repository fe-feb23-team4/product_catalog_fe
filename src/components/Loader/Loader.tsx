import cl from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={cl.loader}>
      <span className={cl.loader__first} />
      <span className={cl.loader__second}>L &nbsp; ading</span>
    </div>
  );
};
