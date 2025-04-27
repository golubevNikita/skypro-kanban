import styled from "styled-components";
import {
  colorDefiner,
  backgroundColorDefiner,
} from "../../../services/utilities";

export const BrowsePopUp = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${function ({ theme }) {
    return theme.secondaryBackground;
  }};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${function ({ theme }) {
      return theme.popBorder;
    }};
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: ${function ({ theme }) {
    return theme.textColor;
  }};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  cursor: pointer;

  opacity: ${function ({ $isactive }) {
    return $isactive ? "1 !important" : "0.4";
  }};

  background-color: ${function ({ $color, theme }) {
    return backgroundColorDefiner($color, theme);
  }};

  color: ${function ({ $color, theme }) {
    return colorDefiner($color, theme);
  }};

  /* @media screen and (max-width: 495px) {
    display: none;
  } */

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;

  color: ${function ({ $isactive, theme }) {
    return $isactive ? theme.selectedTextColor : "#94a6be;";
  }};

  background: ${function ({ $isactive }) {
    return $isactive ? "#94a6be" : "";
  }};

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;

  background: ${function ({ $isRedacted, theme }) {
    return $isRedacted ? theme.secondaryBackground : theme.primaryBackground;
  }};

  border: 0.7px solid ${function ({ $isRedacted, theme }) {
      return $isRedacted ? "rgba(148, 166, 190, 0.4)" : theme.textAreaBorder;
    }};

  color: ${function ({ theme }) {
    return theme.textColor;
  }};

  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;

    @media screen and (max-width: 495px) {
      max-width: 100%;
      height: 37px;
    }
  }

  @media screen and (max-width: 495px) {
    display: none;
  }
`;

export const ThemeDown = styled.div`
  /* display: none; */
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const ThemeTop = styled.div`
  display: block;

  @media screen and (max-width: 495px) {
    display: none;
  }
`;

export const BtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid ${function ({ theme }) {
      return theme.buttonBorderColor;
    }};
  /* var(--palette-navy-60, #565eef); */
  outline: none;
  background: transparent;
  color: ${function ({ theme }) {
    return theme.buttonTextColor;
  }};

  &:hover {
    background-color: #33399b;
    border-color: #33399b;
    color: #ffffff;
  }

  a {
    color: ${function ({ theme }) {
      return theme.buttonTextColor;
    }};
  }

  &:hover a {
    color: #ffffff;
  }
`;

export const BtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  &:hover {
    background-color: #33399b;
  }

  a {
    color: #ffffff;
  }
`;
