import React from "react";

const Nav = (props) => {
  const { contactSelected, setContactSelected } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <h1 role="img" aria-label="camera">
            (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ Shanice .*ೃ
        </h1>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              className="about"
              data-testid="about"
              href="#/about"
              onClick={() => {
                setContactSelected(false);
              }}
            >
              ˘³˘ About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <a
              className="contact"
              data-testid="contact"
              href="#/contact"
              onClick={() => {
                setContactSelected(true);
              }}
            >
              Contact ◐.̃◐
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <a
              className="portfolio"
              data-testid="portfolio"
              href="#/portfolio"
              onClick={() => {
                setContactSelected(false);
              }}
            >
              ʕ·ᴥ·ʔ Portfolio
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <a
              className="resume"
              data-testid="resume"
              href="#/resume"
              onClick={() => {
                setContactSelected(false);
              }}
            >
              Resume ৎ୭
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
