import { useState, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";

import PopNewCard from "../components/PopUps/PopNewCard/PopNewCard";
import PopBrowse from "../components/PopUps/PopBrowse/PopBrowse";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

// import { GlobalStyle } from "./Main.styled";
import { Wrapper } from "./Main.styled";

import { getTasks } from "../services/getTasksApi";
import { getTask } from "../services/tasksHandler";

const MainPage = ({ setIsToken }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cardList, setCardList] = useState([]);

  const getCardList = useCallback(async () => {
    try {
      setLoading(true);
      const token = JSON.parse(localStorage.getItem("localUser")).token;

      getTasks(token).then((response) => {
        if (response.name === "AxiosError") {
          setError(response.response.data.error);
          console.log(error);
        } else {
          setCardList(response.data.tasks);
          setIsToken(true);
          setLoading(false);
        }
      });
    } catch (error) {
      console.log(error.response.data.error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCardList();
  }, [getCardList]);

  const [taskId, setTaskId] = useState("");
  // const [isPopUser, setIsPopUser] = useState(false);
  // const [isPopNewCard, setIsPopNewCard] = useState(false);
  const [isPopBrowse, setIsPopBrowse] = useState(false);

  const getTaskId = ({ taskId, token }) => {
    const data = getTask({ taskId, token });

    data.then((response) => {
      if (response.name === "AxiosError") {
        setTaskId(response.response.data.error);
      } else {
        setTaskId(response.data.task);
      }
    });
  };

  const togglePopBrowse = () => {
    setIsPopBrowse(!isPopBrowse);
  };

  return (
    <>
      {/* <GlobalStyle /> */}
      <Wrapper>
        <PopNewCard
          // isOpen={isPopNewCard}
          renderFunction={setCardList}
        />
        <PopBrowse
          isOpen={isPopBrowse}
          taskId={taskId}
          renderFunction={setCardList}
        />

        <Header />
        <Main
          error={error}
          cardList={cardList}
          loading={loading}
          taskIdDefiner={getTaskId}
          toggleFunction={togglePopBrowse}
        />
        <Outlet />
      </Wrapper>

      <script src="js/script.js"></script>
    </>
  );
};

export default MainPage;
