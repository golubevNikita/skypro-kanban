import React, { useEffect } from "react";
import { mainApiReguest } from "../../../mainApi";

const Column = ({ name, componentsObject }) => {
  const components = componentsObject.map((el) => {
    return (
      <div className="cards__item" key={el.key}>
        {el}
      </div>
    );
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
      <div className="main__column">
        <div className="column__title">
          <p>{name}</p>
        </div>

        {loading ? (
          <div className="cards" style={{ justifyContent: "center" }}>
            <div className="loading-page">
              <h3 className="loading-page__animation">Данные загружаются</h3>
              <div className="loading-page__loader">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cards">{components}</div>
        )}
      </div>
    </>
  );
};

export default Column;
