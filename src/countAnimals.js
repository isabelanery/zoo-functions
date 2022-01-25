const data = require('../data/zoo_data');

const { species } = data;

const countAllAnimals = () => species
  .reduce((acc, animal) => {
    const { name, residents } = animal;
    return { ...acc, [name]: residents.length };
  }, {});

const countAnimals = (animal) => {
  if (!animal) {
    return countAllAnimals();
  }

  if (animal.sex === undefined) {
    return species.find((animalSpecie) => animalSpecie.name === animal.specie).residents.length;
  }

  if (animal.specie && animal.sex !== undefined) {
    return species
      .find((animalSpecie) => animalSpecie.name === animal.specie)
      .residents
      .filter((resident) => resident.sex === animal.sex)
      .length;
  }
};

module.exports = countAnimals;
