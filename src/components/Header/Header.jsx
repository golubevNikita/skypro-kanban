import React from "react";
import { openNewCardPopUp } from "../PopUps/PopNewCard/PopNewCard";
import { Container } from "../Main/Main.styled";

import {
  StyledHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButtonNew,
  HeaderUser,
  HeaderUserPop,
  HeaderUserClose,
  HeaderUserName,
  HeaderUserMail,
  HeaderUserTheme,
} from "./Header.styled";

const Header = () => {
  const [userPopUpDisplay, setUserPopUpDisplay] = React.useState(false);

  const openUserPopUp = () => {
    setUserPopUpDisplay(true);
  };

  const closeUserPopUp = () => {
    setUserPopUpDisplay(false);
  };

  const theme = "light";

  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderBlock>
            <HeaderLogo>
              <a href="" target="_self">
                <img
                  src={`${
                    theme === "dark"
                      ? "images/logo_dark.png"
                      : "images/logo.png"
                  }`}
                  alt="logo"
                />
              </a>
            </HeaderLogo>

            <HeaderNav>
              <HeaderButtonNew onClick={openNewCardPopUp} id="btnMainNew">
                <a>Создать новую задачу</a>
              </HeaderButtonNew>
              <HeaderUser onClick={openUserPopUp}>Ivan Ivanov</HeaderUser>

              {userPopUpDisplay ? (
                <HeaderUserPop>
                  <HeaderUserClose onClick={closeUserPopUp}>x</HeaderUserClose>
                  <HeaderUserName>Ivan Ivanov</HeaderUserName>
                  <HeaderUserMail>ivan.ivanov@gmail.com</HeaderUserMail>
                  <HeaderUserTheme>
                    <p>Темная тема</p>
                    <input type="checkbox" name="checkbox" />
                  </HeaderUserTheme>
                  <button type="button">
                    <a href="#popExit">Выйти</a>
                  </button>
                </HeaderUserPop>
              ) : (
                ""
              )}
            </HeaderNav>
          </HeaderBlock>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
