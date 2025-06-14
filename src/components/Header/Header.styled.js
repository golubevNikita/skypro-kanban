import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${function ({ theme }) {
    return theme.secondaryBackground;
  }};
`;

export const HeaderContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderButtonNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  a {
    color: #ffffff;
  }

  &:hover {
    background-color: #33399b;
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: ${function ({ theme }) {
    return theme.user.textColor;
  }};

  &:hover {
    color: #33399b;
  }

  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${function ({ theme }) {
        return theme.user.textColor;
      }};
    border-bottom: 1.9px solid ${function ({ theme }) {
        return theme.user.textColor;
      }};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;

export const HeaderUserPop = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${function ({ theme }) {
      return theme.user.popBorder;
    }};
  background: ${function ({ theme }) {
    return theme.user.popBackground;
  }};
  box-shadow: 0px 10px 39px 0px ${function ({ theme }) {
      return theme.user.popBoxShadow;
    }};
  padding: 34px;
  text-align: center;
  z-index: 2;

  button {
    width: 72px;
    height: 30px;
    background: transparent;
    border-radius: 4px;
    border: 1px solid ${function ({ theme }) {
        return theme.user.popButton;
      }};

    &:hover {
      background-color: #33399b;
      border-color: #33399b;
      color: #ffffff;
    }

    &:hover a {
      color: #ffffff;
    }

    a {
      color: ${function ({ theme }) {
        return theme.user.popButton;
      }};
    }
  }
`;

export const HeaderUserClose = styled.a`
  position: absolute;
  right: 15px;
  top: 10px;
`;

export const HeaderUserName = styled.p`
  color: ${function ({ theme }) {
    return theme.textColor;
  }};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const HeaderUserMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const HeaderUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${function ({ theme }) {
      return theme.textColor;
    }};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: ${function ({ theme }) {
      return theme.user.popCheckboxBackground;
    }};
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${function ({ theme }) {
      return theme.user.popCheckbox;
    }};
    transition: 0.5s;
  }

  input:checked[type="checkbox"]::before {
    left: 12px;
  }
`;
