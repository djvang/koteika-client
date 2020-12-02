import Link from "next/link";
import { Transition } from "react-transition-group";

import Logo from "../Logo";
import Icon from "../Icon";

const duration = 250;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0, visibility: "hidden" },
};

const OffCanvas = ({ show, handleShow }) => {
  return (
    <Transition in={show} timeout={duration}>
      {(state) => {
        return (
          <div
            className="offcanvas"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div className="offcanvas__header">
              <div className="offcanvas__logo">
                <Logo />
              </div>
              <button
                className="offcanvas__close"
                onClick={() => handleShow?.()}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1l14 14m0-14L1 15"
                    stroke="#1A212F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="offcanvas__body">
              <div className="offcanvas__nav">
                <Link href="/">
                  <a className="offcanvas__link">Почему мы?</a>
                </Link>
                <Link href="/products">
                  <a className="offcanvas__link"> Номера</a>
                </Link>
                <Link href="/">
                  <a className="offcanvas__link">Отзывы</a>
                </Link>
                <Link href="/" className="nav__link">
                  <a className="offcanvas__link">Как нас найти</a>
                </Link>
              </div>
              <div className="offcanvas__phone">8 (800) 333-55-99</div>
              <div className="contacts__socials offcanvas__socials">
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
        );
      }}
    </Transition>
  );
};

export default OffCanvas;
