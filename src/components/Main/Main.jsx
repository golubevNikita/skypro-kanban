import { useContext } from "react";

import { TasksContext } from "../TasksContext";

import CardsItem from "../Card/CardsItem";
import Column from "../Column/Column";
import { statusDefiner, correctedData } from "../../services/utilities";
import { StyledMain, Container, MainBlock, MainContent } from "./Main.styled";

function propsOfComponent(array) {
  const props = array.map((el) => {
    return (
      <CardsItem
        key={el._id}
        topic={el.topic}
        title={el.title}
        date={correctedData(el.date)}
        description={el.description}
      />
    );
  });

  return props;
}

const Main = () => {
  const { cardList, error } = useContext(TasksContext);
  return (
    <StyledMain>
      <Container>
        <MainBlock>
          <MainContent>
            {error || (
              <>
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
              </>
            )}
          </MainContent>
        </MainBlock>
      </Container>
    </StyledMain>
  );
};

export default Main;
