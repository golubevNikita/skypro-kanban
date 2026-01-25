import styled from "styled-components";
import {
  colorDefiner,
  backgroundColorDefiner,
} from "../../../services/utilities";

export const PopUpNewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopUpNewCardContainer = styled.div`
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

  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopUpNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${function ({ theme }) {
    return theme.secondaryBackground;
  }};

  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
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

export const PopUpNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopUpNewCardTitle = styled.h3`
  color: ${function ({ theme }) {
    return theme.textColor;
  }};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopUpNewCardClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: ${function ({ theme }) {
      return theme.textColor;
    }};
  }
`;

export const Subttl = styled.label`
  color: ${function ({ theme }) {
    return theme.textColor;
  }};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  line-height: 100%;

  p {
    color: #f84d4d;
    font-family: Arial;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: left;
  }
`;

export const FormNewInput = styled.input`
  color: ${function ({ theme }) {
    return theme.textColor;
  }};

  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid;

  border-color: ${function ({ $error }) {
    return $error ? "#F84D4D" : "rgba(148, 166, 190, 0.4)";
  }};

  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

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
  }
`;

export const FormNewArea = styled.textarea`
  color: ${function ({ theme }) {
    return theme.textColor;
  }};

  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid;

  border-color: ${function ({ $error }) {
    return $error ? "#F84D4D" : "rgba(148, 166, 190, 0.4)";
  }};

  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
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
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
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

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;
