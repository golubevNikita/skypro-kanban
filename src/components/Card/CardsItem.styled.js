import styled from "styled-components";

export const CardsCard = styled.div`
  padding: 2em;

  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const CardsGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardsTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

  background-color: ${function (props) {
    switch (props.color) {
      case "Web Design":
        return "#ffe4c2";
      case "Research":
        return "#b4fdd1";
      case "Copywriting":
        return "#e9d4ff";
    }
  }};

  color: ${function (props) {
    switch (props.color) {
      case "Web Design":
        return "#ff6d00";
      case "Research":
        return "#06b16e";
      case "Copywriting":
        return "#9a48f1";
    }
  }};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;

    color: ${function (props) {
      switch (props.color) {
        case "Web Design":
          return "#ff6d00";
        case "Research":
          return "#06b16e";
        case "Copywriting":
          return "#9a48f1";
      }
    }};
  }
`;

export const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
