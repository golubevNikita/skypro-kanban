import React, { useEffect } from "react";
import { mainApiReguest } from "../../../mainApi";
import {
  CardsItem,
  MainColumn,
  ColumnTitle,
  Cards,
  LoadingPage,
  LoadingPageLoader,
} from "./Column.styled";

const Column = ({ name, componentsObject }) => {
  const components = componentsObject.map((el) => {
    return <CardsItem key={el.key}>{el}</CardsItem>;
  });

  // useEffect(() => {
  //   setTimeout(
  //     () => {
  //       pageContent(false);
  //     },

  //     2000
  //   );
  // }, []);

  const [loading, pageContent] = React.useState(true);

  useEffect(() => {
    mainApiReguest(() => {
      pageContent(false);
    }, 2000);
  }, []);

  return (
    <>
      <MainColumn>
        <ColumnTitle>
          <p>{name}</p>
        </ColumnTitle>

        {loading ? (
          <Cards style={{ justifyContent: "center" }}>
            <LoadingPage>
              <h3>Данные загружаются</h3>
              <LoadingPageLoader>
                <div></div>
                <div></div>
                <div></div>
              </LoadingPageLoader>
            </LoadingPage>
          </Cards>
        ) : (
          <Cards>{components}</Cards>
        )}
      </MainColumn>
    </>
  );
};

export default Column;
