import React from "react";
import Calendar from "../../Calendar/Calendar";
import {
  PopUpNewCard,
  PopUpNewCardContainer,
  PopUpNewCardBlock,
  PopUpNewCardContent,
  PopUpNewCardTitle,
  PopUpNewCardClose,
} from "./PopNewCard.styled";

export let openNewCardPopUp;

const PopNewCard = () => {
  const [newCardDisplay, setNewCardDisplay] = React.useState(false);

  openNewCardPopUp = () => {
    setNewCardDisplay(true);
  };

  const closeNewCardPopUp = () => {
    setNewCardDisplay(false);
  };

  return newCardDisplay ? (
    <PopUpNewCard id="popNewCard">
      <PopUpNewCardContainer>
        <PopUpNewCardBlock>
          <PopUpNewCardContent>
            <PopUpNewCardTitle>Создание задачи</PopUpNewCardTitle>
            <PopUpNewCardClose onClick={closeNewCardPopUp}>
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
                    className="form-new__input"
                    type="text"
                    name="name"
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
                    className="form-new__area"
                    name="text"
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
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button className="form-new__create _hover01" id="btnCreate">
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
