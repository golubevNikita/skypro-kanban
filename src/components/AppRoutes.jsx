import { Route, Routes } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";

import { getTask, getTasks } from "../services/tasksHandler";

import PrivateRoute from "./PrivateRoute";
import MainPage from "../pages/Main";
import PopUserPage from "../pages/PopUser";
import SignUpPage from "../pages/SignUp";
import SignInPage from "../pages/SignIn";
import NotFoundPage from "../pages/NotFound";
import PopNewCardPage from "../pages/PopNewCard";
import PopBrowsePage from "../pages/PopBrowse";

function AppRoutes() {
  const [isToken, setIsToken] = useState(
    JSON.parse(localStorage.getItem("localUser"))?.token ? true : false
  );

  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const getTaskById = ({ taskId, token }) => {
    const data = getTask({ taskId, token });

    data.then((response) => {
      if (response.name === "AxiosError") {
        setError(response.response.data.error);
      } else {
        setTaskId(response.data.task);
      }
    });
  };

  return (
    <Routes>
      <Route element={<PrivateRoute isToken={isToken} />}>
        <Route
          path="/"
          element={
            <MainPage
              getTaskById={getTaskById}
              cardList={cardList}
              loading={loading}
              error={error}
            />
          }
        >
          <Route
            path="/user"
            element={<PopUserPage setIsToken={setIsToken} />}
          />
          <Route
            path="/new-task"
            element={<PopNewCardPage setCardList={setCardList} />}
          />

          <Route
            path="/task-browse/:id"
            element={
              <PopBrowsePage setCardList={setCardList} taskId={taskId} />
            }
          />
        </Route>
      </Route>

      <Route path="/sign-in" element={<SignInPage setIsToken={setIsToken} />} />
      <Route path="/sign-up" element={<SignUpPage setIsToken={setIsToken} />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
