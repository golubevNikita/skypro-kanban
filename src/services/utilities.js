export function colorDefiner(color) {
  switch (color) {
    case "Web Design":
      return "#ff6d00";
    case "Research":
      return "#06b16e";
    case "Copywriting":
      return "#9a48f1";
  }
}

export function backgroundColorDefiner(color) {
  switch (color) {
    case "Web Design":
      return "#ffe4c2";
    case "Research":
      return "#b4fdd1";
    case "Copywriting":
      return "#e9d4ff";
  }
}

export function statusDefiner(array, status) {
  let statusArray = [];
  array.map((el) => {
    if (el.status.toLowerCase() === status.toLowerCase()) {
      statusArray.push(el);
    }
  });
  return statusArray;
}

export function correctInput(someEnteredText) {
  const trueInput = someEnteredText.value
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("/", "&#47;")
    .replaceAll("\\", "&#92;");
  return trueInput;
}

export function formErrors(
  dataObject,
  errorsObject,
  errorsFunction,
  errorFunction,
  isSignUp
) {
  let isCorrect = true;

  if (isSignUp && !dataObject.name.trim()) {
    errorsObject.name = true;
    errorFunction("Заполните обязательные поля");
    isCorrect = false;
  }

  if (!dataObject.login.trim()) {
    errorsObject.login = true;
    errorFunction("Заполните обязательные поля");
    isCorrect = false;
  }

  if (!dataObject.password.trim()) {
    errorsObject.password = true;
    errorFunction("Заполните обязательные поля");
    isCorrect = false;
  }

  errorsFunction(errorsObject);
  return isCorrect;
}

export function correctedData(dataString = new Date()) {
  const newDateObject = new Date(dataString);

  const dateOptions = {
    // hour: "numeric",
    // minute: "numeric",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };

  const correctedDate = newDateObject.toLocaleDateString("ru-RU", dateOptions);

  return correctedDate;
}
