import { useEffect, useContext } from "react";

import { TasksContext } from "../../сontext/TasksContext";

import { getTasks } from "../../services/tasksHandler";
import { statusDefiner } from "../../services/utilities";

import Column from "../Column/Column";
import Loading from "../Loading/Loading";

import * as S from "./Main.styled";

const Main = () => {
  const {
    cardList,
    loading,
    setLoading,
    taskLoading,
    setCardList,
    error,
    setError,
  } = useContext(TasksContext);

  const getCardList = () => {
    const token = JSON.parse(localStorage.getItem("localUser")).token;

    getTasks(token)
      .then((response) => {
        if (response.name === "AxiosError") {
          setError(response.response.data.error);
          console.log(error);
        } else {
          setCardList(response.data.tasks);
        }
      })
      .catch((err) => {
        setError(err.response.data.error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCardList();
  }, []);

  return (
    <S.StyledMain>
      {taskLoading ? <Loading isopacity={true} /> : ""}
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            {loading ? (
              <Loading isopacity={false} />
            ) : (
              error || (
                <>
                  <Column
                    name="Без статуса"
                    cardsByStatus={statusDefiner(cardList, "Без статуса")}
                  />
                  <Column
                    name="Нужно сделать"
                    cardsByStatus={statusDefiner(cardList, "Нужно сделать")}
                  />
                  <Column
                    name="В работе"
                    cardsByStatus={statusDefiner(cardList, "В работе")}
                  />
                  <Column
                    name="Тестирование"
                    cardsByStatus={statusDefiner(cardList, "Тестирование")}
                  />
                  <Column
                    name="Готово"
                    cardsByStatus={statusDefiner(cardList, "Готово")}
                  />
                </>
              )
            )}
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.StyledMain>
  );
};

export default Main;
