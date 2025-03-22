import CardsItem from "../Card/CardsItem";
import Column from "../Column/Column";
import { cardList } from "../../../data";
import { StyledMain, Container, MainBlock, MainContent } from "./Main.styled";

function statusDefiner(array, status) {
  let statusArray = [];
  array.map((el) => {
    if (el.status.toLowerCase() === status.toLowerCase()) {
      statusArray.push(el);
    }
  });
  return statusArray;
}

function propsOfComponent(array) {
  const props = array.map((el) => {
    return (
      <CardsItem key={el.id} topic={el.topic} title={el.title} date={el.date} />
    );
  });

  return props;
}

const Main = () => {
  return (
    <StyledMain>
      <Container>
        <MainBlock>
          <MainContent>
            <Column
              name="Без статуса"
              componentsObject={propsOfComponent(
                statusDefiner(cardList, "Без статуса")
              )}
            />

            <Column
              name="Нужно сделать"
              componentsObject={propsOfComponent(
                statusDefiner(cardList, "Нужно сделать")
              )}
            />

            <Column
              name="В работе"
              componentsObject={propsOfComponent(
                statusDefiner(cardList, "В работе")
              )}
            />

            <Column
              name="Тестирование"
              componentsObject={propsOfComponent(
                statusDefiner(cardList, "Тестирование")
              )}
            />

            <Column
              name="Готово"
              componentsObject={propsOfComponent(
                statusDefiner(cardList, "Готово")
              )}
            />
          </MainContent>
        </MainBlock>
      </Container>
    </StyledMain>
  );
};

export default Main;
