import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

// import { GlobalStyle } from "./Main.styled";
import { Wrapper } from "./Main.styled";

const MainPage = ({ getTaskById, cardList, loading, error }) => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Wrapper>
        <Header />
        <Main
          taskIdDefiner={getTaskById}
          cardList={cardList}
          loading={loading}
          error={error}
        />
        <Outlet />
      </Wrapper>

      <script src="js/script.js"></script>
    </>
  );
};

export default MainPage;
