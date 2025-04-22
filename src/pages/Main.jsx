import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

import { TasksProvider } from "../сontext/TasksProvider";

import { Wrapper } from "./Main.styled";

const MainPage = () => {
  return (
    <>
      <TasksProvider>
        <Wrapper>
          <Header />
          <Main />
          <Outlet />
        </Wrapper>
      </TasksProvider>
    </>
  );
};

export default MainPage;
