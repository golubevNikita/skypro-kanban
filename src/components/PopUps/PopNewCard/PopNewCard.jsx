import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TasksContext } from "../../../сontext/TasksContext";

import { taskAdd } from "../../../services/tasksHandler";
import { categoriesData } from "../../../services/utilities";

import Calendar from "../../Calendar/Calendar";

import * as S from "./PopNewCard.styled";

const PopNewCard = () => {
  const { setCardList } = useContext(TasksContext);

  const token = JSON.parse(localStorage.getItem("localUser"))?.token;
  const navigate = useNavigate();

  const [newTaskInfo, setNewTaskInfo] = useState({
    // title: "",
    // topic: "",
    // status: "",
    // description: "",
    // date: "",
  });

  function taskInfoChange(event) {
    event.stopPropagation();
    event.preventDefault();
    setNewTaskInfo({ ...newTaskInfo, [event.target.name]: event.target.value });
  }

  const [activeCategory, setActiveCategory] = useState("");

  function setNewTaskCategory(event) {
    event.stopPropagation();
    event.preventDefault();

    const selectedCategory = event.currentTarget.children[0].textContent;

    setActiveCategory(selectedCategory);

    setNewTaskInfo({
      ...newTaskInfo,
      topic: selectedCategory,
    });
  }

  const [deadline, setDeadline] = useState("");

  const newTaskDateSelect = (newSelected) => {
    setDeadline(newSelected);
    setNewTaskInfo({ ...newTaskInfo, date: new Date(newSelected).toJSON() });
  };

  return (
    <S.PopUpNewCard id="popNewCard">
      <S.PopUpNewCardContainer>
        <S.PopUpNewCardBlock>
          <S.PopUpNewCardContent>
            <S.PopUpNewCardTitle>Создание задачи</S.PopUpNewCardTitle>
            <S.PopUpNewCardClose
              onClick={() => {
                setNewTaskInfo({});
                navigate("/");
              }}
            >
              &#10006;
            </S.PopUpNewCardClose>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <S.FormNewInput
                    onChange={taskInfoChange}
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <S.FormNewArea
                    onChange={taskInfoChange}
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></S.FormNewArea>
                </div>
              </form>

              <Calendar
                isNewTask={true}
                deadline={deadline}
                newTaskDateSelect={newTaskDateSelect}
              />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                {categoriesData.map((el, index) => {
                  return (
                    <S.CategoriesTheme
                      $isactive={activeCategory === el}
                      $color={el}
                      key={index}
                      onClick={setNewTaskCategory}
                    >
                      <p>{el}</p>
                    </S.CategoriesTheme>
                  );
                })}
              </div>
            </div>
            <button
              onClick={() => {
                taskAdd({ newTaskInfo, token }).then((response) => {
                  setCardList(response.data.tasks);
                  navigate("/");
                });
              }}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </S.PopUpNewCardContent>
        </S.PopUpNewCardBlock>
      </S.PopUpNewCardContainer>
    </S.PopUpNewCard>
  );
};

export default PopNewCard;
