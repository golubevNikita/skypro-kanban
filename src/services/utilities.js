export function colorDefiner(color, theme) {
  switch (color) {
    case "Web Design":
      return theme.categories.orangeText;

    case "Research":
      return theme.categories.greenText;

    case "Copywriting":
      return theme.categories.purpleText;
  }
}

export function backgroundColorDefiner(color, theme) {
  switch (color) {
    case "Web Design":
      return theme.categories.orangeBackground;

    case "Research":
      return theme.categories.greenBackground;

    case "Copywriting":
      return theme.categories.purpleBackground;
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

export const statusData = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export const categoriesData = ["Web Design", "Research", "Copywriting"];

export const LS_USER = "localUser";

export const LS_APP_THEME = "usingTheme";
