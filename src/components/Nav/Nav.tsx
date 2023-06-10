import cl from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={cl.nav}>
      <ul className={cl.ul}>
        <li className={cl.li}>
          <a href="/" className={cl.a}>
            Home
          </a>
        </li>

        <li className={cl.li}>
          <a href="/phones" className={cl.a}>
            Phones
          </a>
        </li>

        <li className={cl.li}>
          <a href="/tablets" className={cl.a}>
            Tablets
          </a>
        </li>

        <li className={cl.li}>
          <a href="/accesories" className={cl.a}>
            Accesories
          </a>
        </li>
      </ul>
    </nav>
  );
};
