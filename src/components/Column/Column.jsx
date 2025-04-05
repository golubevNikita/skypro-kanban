import {
  CardsItem,
  MainColumn,
  ColumnTitle,
  Cards,
  LoadingPage,
  LoadingPageLoader,
} from "./Column.styled";

const Column = ({ name, loading, componentsObject }) => {
  const components = componentsObject.map((el) => {
    return (
      <CardsItem id={el.key} key={el.key}>
        {el}
      </CardsItem>
    );
  });

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
