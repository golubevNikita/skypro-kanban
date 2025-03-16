export function mainApiReguest(func, delay) {
  setTimeout(() => {
    func();
  }, delay);
}

// export function getListOfComments() {
//   return fetch('https://')
//       .then((response) => {
//           return response.json()
//       })
//       .then((data) => {
//           return data
//       })
// }
