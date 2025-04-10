import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

import TasksProvider from "../components/TasksContext";

// import { GlobalStyle } from "./Main.styled";
import { Wrapper } from "./Main.styled";

const MainPage = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <TasksProvider>
        <Wrapper>
          <Header />
          <Main />
          <Outlet />
        </Wrapper>
      </TasksProvider>

      <script src="js/script.js"></script>
    </>
  );
};

export default MainPage;
