import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [userPopUpDisplay, setUserPopUpDisplay] = useState(false);

  const toggleUserPopUp = () => {
    setUserPopUpDisplay(!userPopUpDisplay);
  };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const userName = JSON.parse(localStorage.getItem("localUser")).name;
  const userMail =
    JSON.parse(localStorage.getItem("localUser")).login + "@gmail.com";

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
              <HeaderUser onClick={toggleUserPopUp}>{userName}</HeaderUser>

              {userPopUpDisplay ? (
                <HeaderUserPop>
                  <HeaderUserClose onClick={toggleUserPopUp}>x</HeaderUserClose>
                  <HeaderUserName>{userName}</HeaderUserName>
                  <HeaderUserMail>{userMail}</HeaderUserMail>
                  <HeaderUserTheme>
                    <p>{theme === "light" ? "Светлая тема" : "Тёмная тема"}</p>
                    <input
                      onChange={toggleTheme}
                      type="checkbox"
                      name="checkbox"
                    />
                  </HeaderUserTheme>
                  <button type="button">
                    <Link to={"/user"}>Выйти</Link>
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
