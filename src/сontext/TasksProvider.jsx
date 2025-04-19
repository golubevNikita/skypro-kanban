import { useState } from "react";

import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskLoading, setTaskLoading] = useState(false);
  const [error, setError] = useState("");
  const [taskById, setTaskById] = useState({});

  const providedData = {
    cardList,
    setCardList,
    loading,
    setLoading,
    taskLoading,
    setTaskLoading,
    error,
    setError,
    taskById,
    setTaskById,
  };

  return (
    <TasksContext.Provider value={providedData}>
      {children}
    </TasksContext.Provider>
  );
};
