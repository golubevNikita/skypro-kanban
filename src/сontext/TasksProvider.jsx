import { useState } from "react";

import { TasksContext } from "./TasksContext";

export const TasksProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [taskId, setTaskId] = useState("");

  const providedData = {
    cardList,
    setCardList,
    loading,
    setLoading,
    error,
    setError,
    taskId,
    setTaskId,
  };

  return (
    <TasksContext.Provider value={providedData}>
      {children}
    </TasksContext.Provider>
  );
};
