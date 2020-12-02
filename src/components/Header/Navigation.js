import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="nav nav_primary">
      <Link href="/">
        <a className="nav__link">Почему мы?</a>
      </Link>
      <Link href="/products">
        <a className="nav__link"> Номера</a>
      </Link>
      <Link href="/">
        <a className="nav__link">Отзывы</a>
      </Link>
      <Link href="/" className="nav__link">
        <a className="nav__link">Как нас найти</a>
      </Link>
    </nav>
  );
};

export default Navigation;
