import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TasksContext } from "../../../сontext/TasksContext";

import { taskAdd } from "../../../services/tasksHandler";
import { LS_USER, categoriesData } from "../../../services/utilities";

import Calendar from "../../Calendar/Calendar";

import * as S from "./PopNewCard.styled";

const PopNewCard = () => {
  const { setCardList } = useContext(TasksContext);

  const token = JSON.parse(localStorage.getItem(LS_USER))?.token;
  const navigate = useNavigate();

  const [newTaskInfo, setNewTaskInfo] = useState({
    title: "",
    // topic: "",
    // status: "",
    description: "",
    // date: "",
  });

  const [errors, setErrors] = useState({
    title: false,
    description: false,
  });

  const [error, setError] = useState("");

  function taskInfoChange(event) {
    event.stopPropagation();
    event.preventDefault();

    const { name, value } = event.target;
    setNewTaskInfo({ ...newTaskInfo, [name]: value });

    setErrors({
      ...errors,
      [name]: false,
    });

    setError("");
  }

  function newTaskErrors() {
    let isCorrect = true;

    if (!newTaskInfo.title.trim()) {
      errors.title = true;
      setError("Заполните обязательное поле");
      isCorrect = false;
    }

    if (!newTaskInfo.description.trim()) {
      errors.description = true;
      setError("Заполните обязательное поле");
      isCorrect = false;
    }

    setErrors(errors);
    return isCorrect;
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

  function addNewTask() {
    if (newTaskErrors()) {
      taskAdd({ newTaskInfo, token }).then((response) => {
        setCardList(response.data.tasks);
        navigate("/");
      });
    }
  }

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
                  <S.Subttl htmlFor="formTitle">
                    Название задачи {errors.title ? <p>{error}</p> : ""}
                  </S.Subttl>
                  <S.FormNewInput
                    $error={errors.title}
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    onChange={taskInfoChange}
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <S.Subttl htmlFor="textArea">
                    Описание задачи {errors.description ? <p>{error}</p> : ""}
                  </S.Subttl>
                  <S.FormNewArea
                    $error={errors.description}
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={taskInfoChange}
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
              onClick={addNewTask}
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
