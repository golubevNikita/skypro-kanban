import { useState } from "react";

import PopUser from "../components/PopUps/PopUser/PopUser";
import PopNewCard from "../components/PopUps/PopNewCard/PopNewCard";
import PopBrowse from "../components/PopUps/PopBrowse/PopBrowse";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

// import { GlobalStyle } from "./Main.styled";
import { Wrapper } from "./Main.styled";

import { getTask } from "../services/tasksHandler";

const MainPage = ({ renderFunction, error, cardList, loading }) => {
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
        <PopUser
          // isOpen={isPopUser}
          toggleFunction={togglePopBrowse}
        />
        <PopNewCard
          // isOpen={isPopNewCard}
          renderFunction={renderFunction}
        />
        <PopBrowse
          isOpen={isPopBrowse}
          taskId={taskId}
          renderFunction={renderFunction}
        />

        <Header />
        <Main
          error={error}
          cardList={cardList}
          loading={loading}
          taskIdDefiner={getTaskId}
          toggleFunction={togglePopBrowse}
        />
      </Wrapper>

      <script src="js/script.js"></script>
    </>
  );
};

export default MainPage;
