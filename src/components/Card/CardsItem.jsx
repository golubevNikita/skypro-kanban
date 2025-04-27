import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LS_USER } from "../../services/utilities";

import { TasksContext } from "../../сontext/TasksContext";

import { getTask } from "../../services/tasksHandler";

import * as S from "./CardsItem.styled";

const CardsItem = ({ topic, title, date, descriprion }) => {
  const { setError, setTaskLoading, setTaskById } = useContext(TasksContext);

  const token = JSON.parse(localStorage.getItem(LS_USER))?.token;
  const navigate = useNavigate();

  const getTaskById = ({ taskId, token }) => {
    setTaskLoading(true);
    const data = getTask({ taskId, token });

    data.then((response) => {
      if (response.name === "AxiosError") {
        setError(response.response.data.error);
      } else {
        setTaskById(response.data.task);
        navigate("/task-browse/" + taskId);
        setTaskLoading(false);
      }
    });
  };

  return (
    <>
      <S.CardsContainer>
        <S.CardsGroup>
          <S.CardsTheme $color={topic}>
            <p>{topic}</p>
          </S.CardsTheme>
          <a target="_self">
            <S.CardButton
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();

                const taskId = event.currentTarget.closest("[id]").id;

                getTaskById({ taskId, token });
              }}
            >
              <div></div>
              <div></div>
              <div></div>
            </S.CardButton>
          </a>
        </S.CardsGroup>
        <S.CardContent>
          <a href="" target="_blank">
            <S.CardTitle>{title}</S.CardTitle>
          </a>
          <S.CardDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{date}</p>
          </S.CardDate>
        </S.CardContent>
      </S.CardsContainer>
    </>
  );
};

export default CardsItem;
