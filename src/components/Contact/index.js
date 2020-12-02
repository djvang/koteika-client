import Icon from "../Icon";

import Map from "./Map";

const Contact = () => {
  return (
    <section className="section section_contacts">
      <div className="container">
        <div className="contacts">
          <div className="contacts__body">
            <h2 className="contacts__title">Как нас найти</h2>
            <div className="contacts__items">
              <div className="contacts__item">
                <div className="contacts__label">Адрес</div>
                <div className="contacts__text">
                  Санкт-Петербург,
                  <br />
                  ул Большая Конюшенная, д 19
                </div>
              </div>
              <div className="contacts__item">
                <div className="contacts__label">Режим работы</div>
                <div className="contacts__text">Ежедневно, с 9:00 до 20:00</div>
              </div>
              <div className="contacts__item">
                <div className="contacts__label">Телефон</div>
                <div className="contacts__text">8 (800) 333-55-99</div>
              </div>
              <div className="contacts__item">
                <div className="contacts__label">E-mail</div>
                <div className="contacts__text">info@cat-hotel.ru</div>
              </div>
              <div className="contacts__item">
                <div className="contacts__label">Социальные сети</div>
                <div className="contacts__text">
                  <div className="contacts__socials">
                    <a className="contacts__social" href="/">
                      <Icon name="facebook" />
                    </a>
                    <a className="contacts__social" href="/">
                      <Icon name="instagram" />
                    </a>
                    <a className="contacts__social" href="/">
                      <Icon name="vk" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contacts__end">
            <div className="map">
              {/* <img className="map__image" src="/images/map.jpg" alt="" /> */}
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
