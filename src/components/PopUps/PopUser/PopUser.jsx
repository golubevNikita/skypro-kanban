import { Link, useNavigate } from "react-router-dom";

const PopUser = ({ setIsToken }) => {
  const navigate = useNavigate();

  const exitButton = (event) => {
    event.stopPropagation();
    event.preventDefault();
    localStorage.removeItem("localUser");
    setIsToken(false);
    navigate("/sign-in");
  };

  return (
    <>
      <div className="pop-exit" id="popExit">
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <form className="pop-exit__form" id="formExit" action="#">
              <div className="pop-exit__form-group">
                <button
                  onClick={exitButton}
                  className="pop-exit__exit-yes _hover01"
                  id="exitYes"
                >
                  <a>Да, выйти</a>
                </button>
                <button className="pop-exit__exit-no _hover03" id="exitNo">
                  <Link to={"/"}>Нет, остаться</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUser;
