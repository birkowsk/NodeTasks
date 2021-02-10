import { loadBooks, loadPets, loadUserData, promiseAll, promiseRace } from './task1';

function main() {
  //   promiseAll([loadUserData(), loadBooks(), loadPets()]).then((resp: any) => {
  //     console.log(resp);
  //     console.log(resp[0]);
  //   });

  promiseRace([loadUserData(), loadBooks(), loadPets()]).then((resp: any) => {
    console.log(resp);
  });
}

export default main;
