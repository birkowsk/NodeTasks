import {
  loadBooks,
  loadPets,
  loadUserData,
  promiseAll,
  promiseRace,
  promiseLast,
  promiseIgnoreErrors,
  loadFail
} from './task1';

function main() {
  //   promiseAll([loadUserData(), loadBooks(), loadPets()]).then((resp: any) => {
  //     console.log(resp);
  //     console.log(resp[0]);
  //   });

  // promiseRace([loadUserData(), loadBooks(), loadPets()]).then((resp: any) => {
  //   console.log(resp);
  // });

  // promiseLast([loadUserData(), loadBooks(), loadPets()]).then((resp: any) => {
  //   console.log(resp);
  // });

  promiseIgnoreErrors([loadFail()]).then((resp: any) => {
    console.log(resp);
  });
}

export default main;
