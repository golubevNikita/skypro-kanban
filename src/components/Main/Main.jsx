import CardsItem from "../Card/CardsItem";
import Column from "../Column/Column";
import { statusDefiner, correctedData } from "../../services/utilities";
import { StyledMain, Container, MainBlock, MainContent } from "./Main.styled";

function propsOfComponent(array, taskIdDefiner) {
  const props = array.map((el) => {
    return (
      <CardsItem
        key={el._id}
        topic={el.topic}
        title={el.title}
        date={correctedData(el.date)}
        description={el.description}
        getId={taskIdDefiner}
      />
    );
  });

  return props;
}

const Main = ({ error, cardList, loading, taskIdDefiner }) => {
  return (
    <StyledMain>
      <Container>
        <MainBlock>
          <MainContent>
            {error || (
              <>
                <Column
                  name="Без статуса"
                  loading={loading}
                  componentsObject={propsOfComponent(
                    statusDefiner(cardList, "Без статуса"),
                    taskIdDefiner
                  )}
                />
                <Column
                  name="Нужно сделать"
                  loading={loading}
                  componentsObject={propsOfComponent(
                    statusDefiner(cardList, "Нужно сделать"),
                    taskIdDefiner
                  )}
                />
                <Column
                  name="В работе"
                  loading={loading}
                  componentsObject={propsOfComponent(
                    statusDefiner(cardList, "В работе"),
                    taskIdDefiner
                  )}
                />
                <Column
                  name="Тестирование"
                  loading={loading}
                  componentsObject={propsOfComponent(
                    statusDefiner(cardList, "Тестирование"),
                    taskIdDefiner
                  )}
                />
                <Column
                  name="Готово"
                  loading={loading}
                  componentsObject={propsOfComponent(
                    statusDefiner(cardList, "Готово"),
                    taskIdDefiner
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
