import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LS_USER } from "../../services/utilities";

import { ThemesContext } from "../../сontext/ThemesContext";

import * as S from "./Header.styled";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemesContext);
  const [userPopUpDisplay, setUserPopUpDisplay] = useState(false);

  const toggleUserPopUp = () => {
    setUserPopUpDisplay(!userPopUpDisplay);
  };

  const userName = JSON.parse(localStorage.getItem(LS_USER)).name;
  const userMail =
    JSON.parse(localStorage.getItem(LS_USER)).login + "@gmail.com";

  return (
    <>
      <S.StyledHeader>
        <S.HeaderContainer>
          <S.HeaderBlock>
            <S.HeaderLogo>
              <Link to={"/"} target="_self">
                <img
                  src={`${isDark ? "images/logo_dark.png" : "images/logo.png"}`}
                  alt="logo"
                />
              </Link>
            </S.HeaderLogo>

            <S.HeaderNav>
              <S.HeaderButtonNew id="btnMainNew">
                <Link to={"/new-task"}>Создать новую задачу</Link>
              </S.HeaderButtonNew>
              <S.HeaderUser onClick={toggleUserPopUp}>{userName}</S.HeaderUser>

              {userPopUpDisplay ? (
                <S.HeaderUserPop>
                  <S.HeaderUserClose onClick={toggleUserPopUp}>
                    x
                  </S.HeaderUserClose>
                  <S.HeaderUserName>{userName}</S.HeaderUserName>
                  <S.HeaderUserMail>{userMail}</S.HeaderUserMail>
                  <S.HeaderUserTheme>
                    <p>{isDark ? "Тёмная тема" : "Светлая тема"}</p>
                    <input
                      onChange={toggleTheme}
                      type="checkbox"
                      name="checkbox"
                    />
                  </S.HeaderUserTheme>
                  <button type="button">
                    <Link to={"/user"}>Выйти</Link>
                  </button>
                </S.HeaderUserPop>
              ) : (
                ""
              )}
            </S.HeaderNav>
          </S.HeaderBlock>
        </S.HeaderContainer>
      </S.StyledHeader>
    </>
  );
};

export default Header;
