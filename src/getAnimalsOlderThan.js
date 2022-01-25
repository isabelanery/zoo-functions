const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animalSpecie, minAge) => {
  const animals = data.species.find((animal) => animal.name === animalSpecie);
  return animals.residents.every((animal) => animal.age >= minAge);
};

module.exports = getAnimalsOlderThan;
