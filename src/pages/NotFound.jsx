import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: ${function ({ theme }) {
    return theme.primaryBackground;
  }};
  width: 100%;
  height: 100vh;
  padding-top: 50px;
`;

const Info = styled.h1`
  color: ${function ({ theme }) {
    return theme.textColor;
  }};
  font-family: "Roboto", sans-serif;
`;

const MainPageButton = styled.button`
  width: 178px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;

  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
  }

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Info>Страница не найдена скобка грусти(</Info>
      <MainPageButton>
        <Link to={"/"}>Верни на главную</Link>
      </MainPageButton>
    </Wrapper>
  );
};

export default NotFoundPage;
