import { useState, useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { getTasks } from "../services/getTasksApi";
import MainPage from "../pages/Main";
import SignUpPage from "../pages/SignUp";
import SignInPage from "../pages/SignIn";
import NotFoundPage from "../pages/NotFound";

function AppRoutes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cardList, setCardList] = useState([]);

  const token = JSON.parse(localStorage.getItem("localUser")).token;

  const getCardList = useCallback(async () => {
    try {
      setLoading(true);
      const data = getTasks(token);

      data.then((response) => {
        if (response.name === "AxiosError") {
          setError(response.response.data.error);
          console.log(error);
        } else {
          setCardList(response.data.tasks);
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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            renderFunction={setCardList}
            error={error}
            cardList={cardList}
            loading={loading}
          />
        }
      />
      <Route
        path="/sign-up"
        element={<SignUpPage renderFunction={getCardList} />}
      />
      <Route
        path="/sign-in"
        element={<SignInPage renderFunction={getCardList} />}
      />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
