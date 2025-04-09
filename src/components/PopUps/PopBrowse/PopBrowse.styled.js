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

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  cursor: pointer;

  opacity: ${function (props) {
    return props.$isactive ? "1 !important" : "0.4";
  }};

  background-color: ${function (props) {
    return backgroundColorDefiner(props.$color);
  }};

  color: ${function (props) {
    return colorDefiner(props.$color);
  }};

  @media screen and (max-width: 495px) {
    display: none;
  }

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

  color: ${function (props) {
    return props.$color ? "#ffffff;" : "#94a6be;";
  }};

  background: ${function (props) {
    return props.$color ? "#94a6be" : "";
  }};

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;
