import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer__container">
            <Logo />
            <nav className="nav nav_primary">
              <a href="/" className="nav__link">
                Почему мы?
              </a>
              <a href="/" className="nav__link">
                Номера
              </a>
              <a href="/" className="nav__link">
                Отзывы
              </a>
              <a href="/" className="nav__link">
                Как нас найти
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer__container">
            <p>© 2019 Все права защищены</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
