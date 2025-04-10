import { useState } from "react";
import { Link } from "react-router-dom";

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
    setTheme(theme === "dark" ? "light" : "dark");
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
              <Link to={"/"} target="_self">
                <img
                  src={`${
                    theme === "dark"
                      ? "images/logo_dark.png"
                      : "images/logo.png"
                  }`}
                  alt="logo"
                />
              </Link>
            </HeaderLogo>

            <HeaderNav>
              <HeaderButtonNew id="btnMainNew">
                <Link to={"/new-task"}>Создать новую задачу</Link>
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
