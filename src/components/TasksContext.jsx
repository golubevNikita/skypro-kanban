import { useState, useCallback, useEffect } from "react";
import { createContext } from "react";

import { getTask, getTasks } from "../services/tasksHandler";

export const TasksContext = createContext(null);

const TasksProvider = ({ children }) => {
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

  const providedData = {
    cardList,
    setCardList,
    loading,
    setLoading,
    error,
    setError,
    taskId,
    getTaskById,
  };

  return (
    <TasksContext.Provider value={providedData}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
