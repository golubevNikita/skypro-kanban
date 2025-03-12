import CardsItem from "../Card/CardsItem";
import Column from "../Column/Column";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column
              name="Без статуса"
              componentsObject={[
                <CardsItem color="_orange" />,
                <CardsItem color="_green" />,
                <CardsItem color="_orange" />,
                <CardsItem color="_purple" />,
                <CardsItem color="_orange" />,
              ]}
            />

            <Column
              name="Нужно сделать"
              componentsObject={[<CardsItem color="_green" />]}
            />

            <Column
              name="В работе"
              componentsObject={[
                <CardsItem color="_green" />,
                <CardsItem color="_purple" />,
                <CardsItem color="_orange" />,
              ]}
            />

            <Column
              name="Тестирование"
              componentsObject={[<CardsItem color="_green" />]}
            />

            <Column
              name="Готово"
              componentsObject={[<CardsItem color="_green" />]}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
