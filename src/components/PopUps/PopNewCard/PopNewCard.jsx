// import { useRef } from "react";
import { useState, useEffect } from "react";
import Calendar from "../../Calendar/Calendar";
import {
  PopUpNewCard,
  PopUpNewCardContainer,
  PopUpNewCardBlock,
  PopUpNewCardContent,
  PopUpNewCardTitle,
  PopUpNewCardClose,
} from "./PopNewCard.styled";
import { taskAdd } from "../../../services/tasksHandler";

export let openNewCardPopUp;

const PopNewCard = ({ renderFunction }) => {
  const [newCardDisplay, setNewCardDisplay] = useState(false);
  const token = JSON.parse(localStorage.getItem("localUser")).token;

  openNewCardPopUp = () => {
    setNewCardDisplay(true);
  };

  const closeNewCardPopUp = () => {
    setNewCardDisplay(false);
  };

  // const newTaskData = useRef({});
  // console.log(newTaskData);

  const [newTaskInfo, setNewTaskInfo] = useState({
    // title: "",
    // topic: "",
    // status: "",
    // description: "",
    // date: "",
  });

  function taskInfoChange(event) {
    event.stopPropagation;
    event.preventDefault;
    setNewTaskInfo({ ...newTaskInfo, [event.target.name]: event.target.value });
  }

  function taskInfoChangeByClick(event) {
    event.stopPropagation;
    event.preventDefault;
    setNewTaskInfo({
      ...newTaskInfo,
      topic: event.currentTarget.children[0].textContent,
    });
  }

  useEffect(() => {
    const themes = document.querySelectorAll(".categories__theme");

    for (const themeEl of themes) {
      themeEl.addEventListener("click", () => {
        themes.forEach((el) => {
          el.classList.remove("_active-category");
        });

        themeEl.classList.add("_active-category");
      });
    }
  }, [newCardDisplay]);

  return newCardDisplay ? (
    <PopUpNewCard id="popNewCard">
      <PopUpNewCardContainer>
        <PopUpNewCardBlock>
          <PopUpNewCardContent>
            <PopUpNewCardTitle>Создание задачи</PopUpNewCardTitle>
            <PopUpNewCardClose
              onClick={() => {
                setNewTaskInfo({});
                closeNewCardPopUp();
              }}
            >
              &#10006;
            </PopUpNewCardClose>
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
                  <input
                    onChange={taskInfoChange}
                    className="form-new__input"
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
                  <textarea
                    onChange={taskInfoChange}
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>

              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div
                  onClick={taskInfoChangeByClick}
                  className="categories__theme _orange"
                >
                  <p className="_orange">Web Design</p>
                </div>
                <div
                  onClick={taskInfoChangeByClick}
                  className="categories__theme _green"
                >
                  <p className="_green">Research</p>
                </div>
                <div
                  onClick={taskInfoChangeByClick}
                  className="categories__theme _purple"
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                taskAdd({ newTaskInfo, token }).then((response) => {
                  renderFunction(response.data.tasks);
                  closeNewCardPopUp();
                });
              }}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </PopUpNewCardContent>
        </PopUpNewCardBlock>
      </PopUpNewCardContainer>
    </PopUpNewCard>
  ) : (
    ""
  );
};

export default PopNewCard;
