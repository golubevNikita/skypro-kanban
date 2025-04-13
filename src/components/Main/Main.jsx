import { useContext, useCallback, useEffect } from "react";

import { TasksContext } from "../../сontext/TasksContext";

import { getTasks } from "../../services/tasksHandler";
import { statusDefiner } from "../../services/utilities";

import Column from "../Column/Column";
import Loading from "../Loading/Loading";

import * as S from "./Main.styled";

const Main = () => {
  const { cardList, setCardList, loading, setLoading, error, setError } =
    useContext(TasksContext);

  const getCardList = useCallback(async () => {
    try {
      const token = JSON.parse(localStorage.getItem("localUser")).token;

      getTasks(token).then((response) => {
        if (response.name === "AxiosError") {
          setError(response.response.data.error);
          console.log(error);
        } else {
          setCardList(response.data.tasks);
          setLoading(false);
        }
      });
    } catch (err) {
      setError(err.response.data.error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCardList();
  }, [getCardList]);

  return (
    <S.StyledMain>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            {loading ? (
              <Loading />
            ) : (
              error || (
                <>
                  <Column
                    name="Без статуса"
                    componentsObject={statusDefiner(cardList, "Без статуса")}
                  />
                  <Column
                    name="Нужно сделать"
                    componentsObject={statusDefiner(cardList, "Нужно сделать")}
                  />
                  <Column
                    name="В работе"
                    componentsObject={statusDefiner(cardList, "В работе")}
                  />
                  <Column
                    name="Тестирование"
                    componentsObject={statusDefiner(cardList, "Тестирование")}
                  />
                  <Column
                    name="Готово"
                    componentsObject={statusDefiner(cardList, "Готово")}
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
