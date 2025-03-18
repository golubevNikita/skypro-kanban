import React from "react";
import { openNewCardPopUp } from "../PopUps/PopNewCard/PopNewCard";

const Header = () => {
  // const xPopUp = document.querySelector(["[data-js-open-modal"]);

  const [userPopUpDisplay, changePopUpDisplay] = React.useState("none");

  const openUserPopUp = () => {
    changePopUpDisplay("block");
  };

  const closeUserPopUp = () => {
    changePopUpDisplay("none");
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__block">
            <div className="header__logo _show _light">
              <a href="" target="_self">
                <img src="images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="header__logo _dark">
              <a href="" target="_self">
                <img src="images/logo_dark.png" alt="logo" />
              </a>
            </div>
            <nav className="header__nav">
              <button
                onClick={openNewCardPopUp}
                className="header__btn-main-new _hover01"
                id="btnMainNew"
              >
                <a>Создать новую задачу</a>
              </button>
              <a onClick={openUserPopUp} className="header__user _hover02">
                Ivan Ivanov
              </a>
              <div
                style={{ display: userPopUpDisplay }}
                className="header__pop-user-set pop-user-set"
              >
                <a
                  onClick={closeUserPopUp}
                  className="header__user__close-pop-up"
                >
                  x
                </a>
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
