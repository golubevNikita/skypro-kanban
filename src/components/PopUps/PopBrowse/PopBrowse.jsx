import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Calendar from "../../Calendar/Calendar";
import { BrowsePopUp, CategoriesTheme, StatusTheme } from "./PopBrowse.styled";
import { taskDelete, taskChange } from "../../../services/tasksHandler";
import { correctedData } from "../../../services/utilities";

const PopBrowse = ({ setCardList, taskId }) => {
  const token = JSON.parse(localStorage.getItem("localUser")).token;

  const navigate = useNavigate();

  const [isRedacted, setRedacted] = useState(true);
  const [defaultTextAreaValue, setDefaultTextAreaValue] = useState(
    taskId.description
  );

  useEffect(() => {
    setDefaultTextAreaValue(taskId.description);
  }, [taskId]);

  // const currentTaskInfo = { ...taskId };
  const [taskInfo, setTaskInfo] = useState({ ...taskId });

  const toggleRedacted = () => {
    setRedacted(!isRedacted);
  };

  function statusChangeByClick(event) {
    event.stopPropagation;
    event.preventDefault;

    setTaskInfo({
      ...taskInfo,
      status: event.currentTarget.children[0].textContent,
    });
  }

  function descriptionChange(event) {
    event.stopPropagation;
    event.preventDefault;

    setDefaultTextAreaValue(event.target.value);

    setTaskInfo({ ...taskInfo, [event.target.name]: event.target.value });
  }

  function topicChange(event) {
    event.stopPropagation;
    event.preventDefault;

    setTaskInfo({
      ...taskInfo,
      topic: event.currentTarget.children[0].textContent,
    });
  }

  useEffect(() => {
    const statusies = document.querySelectorAll(".status__theme");

    for (const statusEl of statusies) {
      statusEl.addEventListener("click", () => {
        statusies.forEach((el) => {
          el.childNodes[0].classList.remove("_gray");
          el.classList.remove("_gray");
        });

        statusEl.childNodes[0].classList.add("_gray");
        statusEl.classList.add("_gray");
      });
    }

    const categories = document.querySelectorAll(".categories__theme");

    for (const categoryEl of categories) {
      categoryEl.addEventListener("click", () => {
        categories.forEach((el) => {
          el.classList.remove("_active-category");
        });

        categoryEl.classList.add("_active-category");
      });
    }
  }, [isRedacted]);

  return (
    <BrowsePopUp id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{taskId.title}</h3>
              <CategoriesTheme $color={taskId.topic} $isactive={taskId.topic}>
                <p>{taskId.topic}</p>
              </CategoriesTheme>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>

              <div className="status__themes">
                {isRedacted ? (
                  <StatusTheme $color={"gray"}>
                    <p>{taskId.status}</p>
                  </StatusTheme>
                ) : (
                  <>
                    <div
                      onClick={statusChangeByClick}
                      name="status"
                      className={`status__theme ${
                        taskId.status === "Без статуса" ? "_gray" : ""
                      }`}
                    >
                      <p
                        className={
                          taskId.status === "Без статуса" ? "_gray" : ""
                        }
                      >
                        Без статуса
                      </p>
                    </div>

                    <div
                      onClick={statusChangeByClick}
                      name="status"
                      className={`status__theme ${
                        taskId.status === "Нужно сделать" ? "_gray" : ""
                      }`}
                    >
                      <p
                        className={
                          taskId.status === "Нужно сделать" ? "_gray" : ""
                        }
                      >
                        Нужно сделать
                      </p>
                    </div>

                    <div
                      onClick={statusChangeByClick}
                      name="status"
                      className={`status__theme ${
                        taskId.status === "В работе" ? "_gray" : ""
                      }`}
                    >
                      <p
                        className={taskId.status === "В работе" ? "_gray" : ""}
                      >
                        В работе
                      </p>
                    </div>

                    <div
                      onClick={statusChangeByClick}
                      name="status"
                      className={`status__theme ${
                        taskId.status === "Тестирование" ? "_gray" : ""
                      }`}
                    >
                      <p
                        className={
                          taskId.status === "Тестирование" ? "_gray" : ""
                        }
                      >
                        Тестирование
                      </p>
                    </div>

                    <div
                      onClick={statusChangeByClick}
                      name="status"
                      className={`status__theme ${
                        taskId.status === "Готово" ? "_gray" : ""
                      }`}
                    >
                      <p className={taskId.status === "Готово" ? "_gray" : ""}>
                        Готово
                      </p>
                    </div>
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
                  <textarea
                    value={defaultTextAreaValue}
                    onChange={descriptionChange}
                    className="form-browse__area"
                    name="description"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>

              <Calendar date={correctedData(taskId.date)} />
            </div>

            {isRedacted ? (
              ""
            ) : (
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>

                <div
                  onClick={topicChange}
                  name="topic"
                  className={`categories__theme _orange ${
                    taskId.topic === "Web Design" ? "_active-category" : ""
                  }`}
                >
                  <p className="_orange">Web Design</p>
                </div>

                <div
                  onClick={topicChange}
                  name="topic"
                  className={`categories__theme _green ${
                    taskId.topic === "Research" ? "_active-category" : ""
                  }`}
                >
                  <p className="_green">Research</p>
                </div>

                <div
                  onClick={topicChange}
                  name="topic"
                  className={`categories__theme _purple ${
                    taskId.topic === "Copywriting" ? "_active-category" : ""
                  }`}
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            )}

            {isRedacted ? (
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <button
                    onClick={() => {
                      toggleRedacted();
                    }}
                    className="btn-browse__edit _btn-bor _hover03"
                  >
                    <a>Редактировать задачу</a>
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={(event) => {
                      event.stopPropagation;
                      event.preventDefault;
                      const deletedTaskId = taskId["_id"];

                      taskDelete({ deletedTaskId, token }).then((response) => {
                        setCardList(response.data.tasks);
                        navigate("/");
                      });
                    }}
                  >
                    <a>Удалить задачу</a>
                  </button>
                </div>
                <button
                  onClick={() => {
                    setDefaultTextAreaValue(taskId.description);
                    navigate("/");
                  }}
                  className="btn-browse__close _btn-bg _hover01"
                >
                  <a>Закрыть</a>
                </button>
              </div>
            ) : (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button
                    onClick={() => {
                      const changedTaskId = taskId["_id"];
                      const newData = { ...taskId, ...taskInfo };

                      taskChange({ changedTaskId, newData, token }).then(
                        (response) => {
                          setCardList(response.data.tasks);
                          toggleRedacted();
                          navigate("/");
                        }
                      );
                    }}
                    className="btn-edit__edit _btn-bg _hover01"
                  >
                    <a>Сохранить</a>
                  </button>
                  <button
                    onClick={() => {
                      setTaskInfo({ ...taskId });
                      setDefaultTextAreaValue(taskId.description);
                      toggleRedacted();
                    }}
                    className="btn-edit__edit _btn-bor _hover03"
                  >
                    <a>Отменить</a>
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                  >
                    <a>Удалить задачу</a>
                  </button>
                </div>
                <button
                  onClick={() => {
                    setTaskInfo({ ...taskId });
                    toggleRedacted();
                    navigate("/");
                  }}
                  className="btn-edit__close _btn-bg _hover01"
                >
                  <a>Закрыть</a>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </BrowsePopUp>
  );
};

export default PopBrowse;
