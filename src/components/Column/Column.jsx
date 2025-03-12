const Column = (props) => {
  const components = props.componentsObject.map((el, index) => {
    return (
      <div className="cards__item" key={index}>
        {el}
      </div>
    );
  });

  return (
    <>
      <div className="main__column">
        <div className="column__title">
          <p>{props.name}</p>
        </div>
        <div className="cards">{components}</div>
      </div>
    </>
  );
};

export default Column;
