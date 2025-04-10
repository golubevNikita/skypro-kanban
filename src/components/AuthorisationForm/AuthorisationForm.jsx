import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formErrors } from "../../services/utilities";
import { signIn, signUp } from "../../services/authorisation";

import { AuthContext } from "../AuthContext";

import {
  GlobalStyle,
  Wrapper,
  Container,
  Modal,
  ModalBlock,
  ModalTitle,
  ModalForm,
  ModalInput,
  ModalButton,
  ModalFormFooter,
} from "./AuthorisationForm.styled";

const AuthorisationForm = ({ isSignUp }) => {
  const { setIsToken } = useContext(AuthContext);

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
        setIsToken(true);
        navigate("/");
      }
    });
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Modal>
            <ModalBlock>
              <ModalTitle>
                <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
              </ModalTitle>
              <ModalForm id="formLogUp" action="#">
                {isSignUp && (
                  <ModalInput
                    type="text"
                    name="name"
                    id="form-name"
                    placeholder="Имя"
                    onChange={inputChange}
                  />
                )}
                <ModalInput
                  type="text"
                  name="login"
                  id="form-login"
                  placeholder="Эл. почта"
                  onChange={inputChange}
                />
                <ModalInput
                  type="password"
                  name="password"
                  id="form-password"
                  placeholder="Пароль"
                  onChange={inputChange}
                />
                <ModalButton onClick={submitButton} id="form-button">
                  <a href="../main.html">
                    {isSignUp ? "Зарегистрироваться" : "Войти"}
                  </a>
                </ModalButton>
                <ModalFormFooter className="modal__form-group">
                  <p>
                    {isSignUp
                      ? "Уже есть аккаунт?"
                      : "Нужно зарегистрироваться?"}
                  </p>
                  <Link to={isSignUp ? "/sign-in" : "/sign-up"}>
                    {isSignUp ? "Войдите здесь" : "Регистрируйтесь здесь"}
                  </Link>
                </ModalFormFooter>
              </ModalForm>
            </ModalBlock>
          </Modal>
        </Container>
      </Wrapper>
    </>
  );
};

export default AuthorisationForm;
