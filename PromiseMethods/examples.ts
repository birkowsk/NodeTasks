function mainExample() {
  //   const axios = require('axios').default;
  //   const names = ['birkowsk', 'PawelSkrodzki'];
  //   const requests = names.map((name) => axios.get(`https://api.github.com/users/${name}`));
  //   Promise.all(requests)
  //     .then((data) => data.map((user) => user.data))
  //     .then((users) => users.forEach((user) => console.log(user.login)));
  //   const movies = [{ id: 1, category_id: 1, title: 'KsięgaDżungli' }];
  //   const categories = [{ id: 1, name: 'sciFi' }];
  //   function fetchMovies(id) {
  //     return new Promise((resolve, reject) => {
  //       const movie = movies.find((movie) => movie.id === id);
  //       movie ? resolve(movie) : reject(new Error('No movie was found'));
  //     });
  //   }
  //   function populateCategory(movie) {
  //     return new Promise((resolve, reject) => {
  //       const category = categories.find((category) => category.id === movie.category_id);
  //       category ? resolve(movie) : reject(new Error('No category was found'));
  //     });
  //   }
  //   fetchMovies(1)
  //     .then((movie) => populateCategory(movie))
  //     .then((result) => console.log(result))
  //     .catch((reason) => console.log(reason));
}

export default mainExample;
