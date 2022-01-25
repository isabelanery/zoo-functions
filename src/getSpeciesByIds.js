const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const listSpecies = ids.reduce((acc, curr) => {
    data.species.forEach((animal) => {
      if (curr === animal.id) {
        acc.push(animal);
      }
    });

    return acc;
  }, []);

  return listSpecies;
};

module.exports = getSpeciesByIds;

// primeira tentativa que o lint não deixou ver a luz do sol
// conversando com o Paulo Victor, vi que a solução com o reduce fazia bem mais sentido
// e troquei a forma de resolver

// const listSpecies = ids.map((searchId) => {
//   data.species.forEach((animal) => {
//   // searchId === animal.id ? searchId = animal : searchId;
//     if (searchId === animal.id) {
//       searchId = animal;
//     } return searchId;
// });
//   return searchId;
// });

// return listSpecies;
