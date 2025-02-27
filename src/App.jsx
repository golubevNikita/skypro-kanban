// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import PopUp from "./components/PopUp";
import Header from "./components/Header";
import CardsItem from "./components/CardsItem";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <PopUp />

        <Header />

        <main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                <div className="main__column column">
                  <div className="column__title">
                    <p>Без статуса</p>
                  </div>
                  <div className="cards">
                    <CardsItem color="_orange" />
                    <CardsItem color="_green" />
                    <CardsItem color="_orange" />
                    <CardsItem color="_purple" />
                    <CardsItem color="_orange" />
                  </div>
                </div>

                <div className="main__column">
                  <div className="column__title">
                    <p>Нужно сделать</p>
                  </div>
                  <div className="cards">
                    <CardsItem color="_green" />
                  </div>
                </div>

                <div className="main__column">
                  <div className="column__title">
                    <p>В работе</p>
                  </div>
                  <div className="cards">
                    <CardsItem color="_green" />
                    <CardsItem color="_purple" />
                    <CardsItem color="_orange" />
                  </div>
                </div>

                <div className="main__column">
                  <div className="column__title">
                    <p>Тестирование</p>
                  </div>
                  <div className="cards">
                    <CardsItem color="_green" />
                  </div>
                </div>

                <div className="main__column">
                  <div className="column__title">
                    <p>Готово</p>
                  </div>
                  <div className="cards">
                    <CardsItem color="_green" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
