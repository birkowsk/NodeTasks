// Wypracuj funkcje, które odwzorowują działanie metod promisowych + według mnie promisy powinny posiadać jeszczę dwie dodatkowe metody(Wszystko opisane dokładniej poniżej w kodzie)
// Wypracowanie funkcji promise.all(arrayOfPromises)
// Wypracowanie funkcji promise.race(arrayOfPromises)
// Wypracowanie funkcji promise.last(arrayOfPromise)
// Wypracowanie funkcji promise.ignoreErrors(arrayOfPromise)

// Promise.last(arrayOfPromise) - zwraca do then tylko ostatnią promisę, która się wykonała asynchronicznie,
// a jeśli wystąpił błąd w co najmniej jednej promisę, zwraca do catch ten błąd po ukończeniu ostatniej promisy

// Promise.ignoreErrors(arrayOfPromise) - nie ważne co się stanie,
// zwracane są tylko te wyniki promise, które zakończyły się sukcesem, błędy są ignorowane

// skopiuj identyczne działanie tych metod w funkcjach

function loadUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('A');
    }, 2000);
  });
}

function loadBooks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('B');
    }, 1000);
  });
}

function loadPets() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('C');
    }, 500);
  });
}

const promiseAll = (arrayOfPromise) => {
  return new Promise((resolve, reject) => {
    let results: string[] = [];
    let completed = 0;

    arrayOfPromise.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          results[index] = result;
          completed += 1;

          if (completed == arrayOfPromise.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

const promiseRace = (arrayOfPromise) => {
  return new Promise((resolve, reject) => {
    let results: string[] = [];
    let completed = 0;

    arrayOfPromise.forEach((value) => {
      Promise.resolve(value)
        .then((result) => {
          results.push(result);
          completed += 1;

          if (completed == 1) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

// const promiseLast = (arrayOfPromise) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

// const promiseIgnoreErrors = (arrayOfPromise) => {
//   return new Promise((resolve, reject) => {
//     // ...
//   });
// };

export { loadUserData, loadBooks, loadPets, promiseAll, promiseRace };
