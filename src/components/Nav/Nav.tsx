import sl from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={sl.nav}>
      <ul className={sl.ul}>
        <li className={sl.li}>
          <a href="/" className={sl.a}>
            Home
          </a>
        </li>

        <li className={sl.li}>
          <a href="/phones" className={sl.a}>
            Phones
          </a>
        </li>

        <li className={sl.li}>
          <a href="/tablets" className={sl.a}>
            Tablets
          </a>
        </li>

        <li className={sl.li}>
          <a href="/accesories" className={sl.a}>
            Accesories
          </a>
        </li>
      </ul>
    </nav>
  );
};
