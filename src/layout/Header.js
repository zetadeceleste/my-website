import React from 'react';

const Header = () => {
   return (
      <header id="header" className="header">
         <nav id="navbar" className="header__navbar">
            <ul className="header__navbar__links">
               <li>
                  <a
                     className="header__navbar__links__link header__navbar__links__link--icon"
                     href="#cover"
                  >
                     <img
                        src="./images/icons/letter-c-icon.svg"
                        alt="Celeste Zapata | Web Developer"
                        title="Return to top"
                     />
                  </a>
               </li>
               <li>
                  <a className="header__navbar__links__link" href="#about">
                     ABOUT
                  </a>
               </li>
               <li>
                  <a className="header__navbar__links__link" href="#portfolio">
                     PORTFOLIO
                  </a>
               </li>
               <li>
                  <a className="header__navbar__links__link" href="#skills">
                     SKILLS
                  </a>
               </li>
               <li>
                  <a className="header__navbar__links__link" href="#contact">
                     CONTACT
                  </a>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
