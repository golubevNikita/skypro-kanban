import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../сontext/AuthContext";
import { TasksContext } from "../../../сontext/TasksContext";

import * as S from "./PopUser.styled";

const PopUser = () => {
  const { setIsAuth } = useContext(AuthContext);
  const { setCardList } = useContext(TasksContext);
  const navigate = useNavigate();

  const exitButton = (event) => {
    event.stopPropagation();
    event.preventDefault();
    localStorage.removeItem("localUser");
    setCardList([]);
    setIsAuth(false);
    navigate("/sign-in");
  };

  return (
    <>
      <S.PopExit id="popExit">
        <S.PopExitContainer>
          <S.PopExitBlock>
            <S.PopExitTtl>
              <h2>Выйти из аккаунта?</h2>
            </S.PopExitTtl>
            <form className="pop-exit__form" id="formExit" action="#">
              <div className="pop-exit__form-group">
                <S.PopExitYes onClick={exitButton} id="exitYes">
                  <a>Да, выйти</a>
                </S.PopExitYes>
                <S.PopExitNo id="exitNo">
                  <Link to={"/"}>Нет, остаться</Link>
                </S.PopExitNo>
              </div>
            </form>
          </S.PopExitBlock>
        </S.PopExitContainer>
      </S.PopExit>
    </>
  );
};

export default PopUser;
