const Banner = () => {
  return (
    <section className="section section_banner">
      <div className="container">
        <div className="banner">
          <div className="banner__body">
            <div className="banner__content">
              <h2 className="banner__title">
                Каждый 7-й день
                <span className="banner__title-large">бесплатно!</span>
              </h2>
              <p className="banner__description">
                Акция действует при размещении в номерах “Люкс” и “Супер-Люкс”
              </p>
              <div className="banner__actions">
                <a href="/" className="button button_primary button_inverse">
                  Забронировать
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
