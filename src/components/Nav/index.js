import React from "react";

const Nav = (props) => {
  const {
    contactSelected,
    setContactSelected,
    portfolioSelected,
    setPortfolioSelected,
    aboutSelected,
    setAboutSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
          (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ Shanice .*ೃ
          </span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${aboutSelected && "navActive"}`}>
            <a
              data-testid="about"
              href="#about"
              onClick={() => {setContactSelected(false); setAboutSelected(true); setPortfolioSelected(false)}}
            >
              ˘³˘ About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => {setContactSelected(true); setAboutSelected(false); setPortfolioSelected(false)}}>Contact ◐.̃◐</span>
          </li>
          <li className={`mx-2 ${portfolioSelected && "navActive"}`}>
            <a
              data-testid="portfolio"
              href="#portfolio"
              onClick={() => {setContactSelected(false); setAboutSelected(false); setPortfolioSelected(true)}}
            >
              ʕ·ᴥ·ʔ Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="resume"
              href="#resume"
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
