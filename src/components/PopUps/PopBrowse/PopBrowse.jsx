import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TasksContext } from "../../../сontext/TasksContext";

import { taskDelete, taskChange } from "../../../services/tasksHandler";
import { statusData, categoriesData } from "../../../services/utilities";

import Calendar from "../../Calendar/Calendar";

import * as S from "./PopBrowse.styled";

const PopBrowse = () => {
  const { setCardList, taskById, setTaskById } = useContext(TasksContext);
  const token = JSON.parse(localStorage.getItem("localUser"))?.token;

  const navigate = useNavigate();

  const [isRedacted, setRedacted] = useState(true);

  const toggleRedacted = () => {
    setRedacted(!isRedacted);
  };

  const [defaultTextAreaValue, setDefaultTextAreaValue] = useState(
    taskById.description
  );

  useEffect(() => {
    setDefaultTextAreaValue(taskById.description);
  }, [taskById]);

  const [taskInfo, setTaskInfo] = useState({ ...taskById });

  function descriptionChange(event) {
    event.stopPropagation;
    event.preventDefault;

    setDefaultTextAreaValue(event.target.value);

    setTaskInfo({ ...taskInfo, [event.target.name]: event.target.value });
  }

  const [activeStatus, setActiveStatus] = useState(taskById.status);
  const [activeCategory, setActiveCategory] = useState(taskById.topic);

  function changeData(event) {
    event.stopPropagation();
    event.preventDefault();

    const changedData = event.currentTarget.children[0].textContent;

    if (event.currentTarget.getAttribute("name") === "status") {
      const status = changedData;

      setActiveStatus(status);

      setTaskInfo({
        ...taskInfo,
        status,
      });
    } else {
      const topic = changedData;

      setActiveCategory(topic);

      setTaskInfo({
        ...taskInfo,
        topic,
      });
    }
  }

  const [deadline, setDeadline] = useState(taskById.date);

  const handleSelect = (newSelected) => {
    setRedacted(false);
    setDeadline(newSelected);
    setTaskInfo({ ...taskInfo, date: new Date(newSelected).toJSON() });
  };

  return (
    <S.BrowsePopUp id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>{taskById.title}</S.PopBrowseTtl>
              <S.CategoriesTheme
                $color={taskById.topic}
                $isactive={taskById.topic}
              >
                <p>{taskById.topic}</p>
              </S.CategoriesTheme>
            </S.PopBrowseTopBlock>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>

              <div className="status__themes">
                {isRedacted ? (
                  <S.StatusTheme $isactive={true}>
                    <p>{taskById.status}</p>
                  </S.StatusTheme>
                ) : (
                  <>
                    {statusData.map((el, index) => {
                      return (
                        <S.StatusTheme
                          $isactive={activeStatus === el}
                          $color={el}
                          key={index}
                          name="status"
                          onClick={changeData}
                        >
                          <p>{el}</p>
                        </S.StatusTheme>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <S.FormBrowseArea
                    $isRedacted={isRedacted}
                    value={defaultTextAreaValue}
                    onChange={descriptionChange}
                    name="description"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </div>
              </form>

              <Calendar
                isNewTask={false}
                deadline={deadline}
                handleSelect={handleSelect}
              />
            </div>

            {isRedacted ? (
              ""
            ) : (
              <S.ThemeDown>
                <p className="categories__p subttl">Категория</p>
                {categoriesData.map((el, index) => {
                  return (
                    <S.CategoriesTheme
                      $isactive={activeCategory === el}
                      $color={el}
                      key={index}
                      name="topic"
                      onClick={changeData}
                    >
                      <p>{el}</p>
                    </S.CategoriesTheme>
                  );
                })}
              </S.ThemeDown>
            )}

            {isRedacted ? (
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <S.BtnBor
                    onClick={() => {
                      toggleRedacted();
                    }}
                  >
                    <a>Редактировать задачу</a>
                  </S.BtnBor>
                  <S.BtnBor
                    onClick={(event) => {
                      event.stopPropagation;
                      event.preventDefault;
                      const deletedTaskId = taskById["_id"];

                      taskDelete({ deletedTaskId, token }).then((response) => {
                        setCardList(response.data.tasks);
                        setTaskById({});
                        navigate("/");
                      });
                    }}
                  >
                    <a>Удалить задачу</a>
                  </S.BtnBor>
                </div>
                <S.BtnBg
                  onClick={() => {
                    setDefaultTextAreaValue(taskById.description);
                    setTaskById({});
                    navigate("/");
                  }}
                >
                  <a>Закрыть</a>
                </S.BtnBg>
              </div>
            ) : (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <S.BtnBg
                    onClick={() => {
                      const changedTaskId = taskById["_id"];
                      const newData = { ...taskById, ...taskInfo };

                      taskChange({ changedTaskId, newData, token }).then(
                        (response) => {
                          setCardList(response.data.tasks);
                          toggleRedacted();
                          setTaskById({});
                          navigate("/");
                        }
                      );
                    }}
                  >
                    <a>Сохранить</a>
                  </S.BtnBg>
                  <S.BtnBor
                    onClick={() => {
                      setTaskInfo({ ...taskById });
                      setDefaultTextAreaValue(taskById.description);
                      toggleRedacted();
                    }}
                  >
                    <a>Отменить</a>
                  </S.BtnBor>
                  <S.BtnBor
                    id="btnDelete"
                    onClick={(event) => {
                      event.stopPropagation;
                      event.preventDefault;
                      const deletedTaskId = taskById["_id"];

                      taskDelete({ deletedTaskId, token }).then((response) => {
                        setCardList(response.data.tasks);
                        setTaskById({});
                        navigate("/");
                      });
                    }}
                  >
                    <a>Удалить задачу</a>
                  </S.BtnBor>
                </div>
                <S.BtnBg
                  onClick={() => {
                    setTaskInfo({ ...taskById });
                    setTaskById({});
                    toggleRedacted();
                    navigate("/");
                  }}
                >
                  <a>Закрыть</a>
                </S.BtnBg>
              </div>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.BrowsePopUp>
  );
};

export default PopBrowse;
