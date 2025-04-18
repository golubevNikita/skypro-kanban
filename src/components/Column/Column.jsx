import { correctedData } from "../../services/utilities";

import CardsItem from "../Card/CardsItem";

import * as S from "./Column.styled";

const Column = ({ name, componentsObject }) => {
  return (
    <>
      <S.MainColumn>
        <S.ColumnTitle>
          <p>{name}</p>
        </S.ColumnTitle>
        <S.Cards>
          {componentsObject.map((el) => {
            return (
              <S.CardsItem id={el._id} key={el._id}>
                <CardsItem
                  topic={el.topic}
                  title={el.title}
                  date={correctedData(el.date)}
                  description={el.description}
                />
              </S.CardsItem>
            );
          })}
        </S.Cards>
      </S.MainColumn>
    </>
  );
};

export default Column;
