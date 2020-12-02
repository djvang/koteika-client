import { useState } from "react";

import Sticky from "react-stickynode";

import Logo from "../Logo";
import Navigation from "./Navigation";
import OffCanvas from "./OffCanvas";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Sticky innerZ={500} enabled={true} top={0}>
        <header className="header">
          <div className="container">
            <div className="header__container">
              <Logo />
              <div className="header__desktop">
                <Navigation />
              </div>
              <div className="header__mobile">
                <button
                  className="header__hamburder"
                  onClick={() => setShow((show) => !show)}
                >
                  <svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 1h22M1 8h22M1 15h22"
                      stroke="#1A212F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      </Sticky>

      <OffCanvas show={show} handleShow={() => setShow((show) => !show)} />
    </>
  );
};

export default Header;
