import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formErrors } from "../../services/utilities";
import { signIn, signUp } from "../../services/authorisation";

import { AuthContext } from "../../сontext/AuthContext";

import * as S from "./AuthorisationForm.styled";

const AuthorisationForm = ({ isSignUp }) => {
  const { setIsAuth } = useContext(AuthContext);

  const [inputData, setInputData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const [error, setError] = useState("");

  const inputChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });

    setErrors({
      ...errors,
      [name]: false,
    });

    setError("");
  };

  const navigate = useNavigate();

  const submitButton = (event) => {
    event.preventDefault();

    if (!formErrors(inputData, errors, setErrors, setError, isSignUp)) {
      console.log(error);
      return;
    }

    const data = isSignUp
      ? signUp(inputData)
      : signIn({ login: inputData.login, password: inputData.password });

    data.then((response) => {
      if (response.name === "AxiosError") {
        setError(response.response.data.error);
        console.log(error);
      } else {
        localStorage.setItem("localUser", JSON.stringify(response));
        setIsAuth(true);
        navigate("/");
      }
    });
  };

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTitle>
                <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
              </S.ModalTitle>
              <S.ModalForm id="formLogUp" action="#">
                {isSignUp && (
                  <S.ModalInput
                    type="text"
                    name="name"
                    id="form-name"
                    placeholder="Имя"
                    onChange={inputChange}
                  />
                )}
                <S.ModalInput
                  type="text"
                  name="login"
                  id="form-login"
                  placeholder="Эл. почта"
                  onChange={inputChange}
                />
                <S.ModalInput
                  type="password"
                  name="password"
                  id="form-password"
                  placeholder="Пароль"
                  onChange={inputChange}
                />
                <S.ModalButton onClick={submitButton} id="form-button">
                  <a href="../main.html">
                    {isSignUp ? "Зарегистрироваться" : "Войти"}
                  </a>
                </S.ModalButton>
                <S.ModalFormFooter className="modal__form-group">
                  <p>
                    {isSignUp
                      ? "Уже есть аккаунт?"
                      : "Нужно зарегистрироваться?"}
                  </p>
                  <Link to={isSignUp ? "/sign-in" : "/sign-up"}>
                    {isSignUp ? "Войдите здесь" : "Регистрируйтесь здесь"}
                  </Link>
                </S.ModalFormFooter>
              </S.ModalForm>
            </S.ModalBlock>
          </S.Modal>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default AuthorisationForm;
