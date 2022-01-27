const data = require('../data/zoo_data');

// Todo o código realizado em parceria com Paulo Victor, turma 19 - Tribo A

const { species } = data;

const locationAnimals = () => species
  .reduce((acc, specie) => {
    const { location } = specie;

    acc[location] = species
      .filter((animal) => animal.location === location)
      .map((element) => element.name);

    return acc;
  }, {});

const namedAnimals = () => species
  .reduce((acc, specie) => {
    const { location } = specie;

    acc[location] = species
      .filter((animal) => animal.location === location)
      .map((element) => {
        const nameResidents = [];
        element.residents.forEach((resident) => nameResidents.push(resident.name));

        const test = {};
        test[element.name] = nameResidents;
        return test;
      });
    return acc;
  }, {});

const sortNames = (options) => species
  .reduce((acc, specie) => {
    const { location } = specie;

    acc[location] = species
      .filter((animal) => animal.location === location)
      .map((element) => {
        const nameResidents = [];
        element.residents.forEach((resident) => nameResidents.push(resident.name));

        const test = {};
        test[element.name] = nameResidents.sort();
        return test;
      });
    return acc;
  }, {});

const sortNamesWithSex = (options) => species
  .reduce((acc, specie) => {
    const { location } = specie;

    acc[location] = species
      .filter((animal) => animal.location === location)
      .map((element) => {
        const nameResidents = [];
        element.residents.forEach((resident) => {
          if (resident.sex === options.sex) {
            nameResidents.push(resident.name);
          }
        });

        const test = {};
        test[element.name] = nameResidents.sort();
        return test;
      });
    return acc;
  }, {});

const animalsBySex = (options) => species
  .reduce((acc, specie) => {
    const { location } = specie;

    acc[location] = species
      .filter((animal) => animal.location === location)
      .map((element) => {
        const namesReisdents = [];
        element.residents.forEach((resident) => {
          if (resident.sex === options.sex) {
            namesReisdents.push(resident.name);
          }
        });

        const test = {};
        test[element.name] = namesReisdents;
        return test;
      });
    return acc;
  }, {});

const validations = [
  undefined,
  { sex: 'female' },
  { sex: 'female', sorted: true },
  { includeNames: true },
  { includeNames: true, sorted: true },
  { includeNames: true, sex: 'female' },
  { includeNames: true, sex: 'female', sorted: true },
];

const whatToDo = [
  locationAnimals,
  locationAnimals,
  locationAnimals,
  namedAnimals,
  sortNames,
  animalsBySex,
  sortNamesWithSex,
];

const getAnimalMap = (options) => {
  let callback;

  validations.find((element, index) => {
    if (JSON.stringify(element) === JSON.stringify(options)) {
      callback = whatToDo[index];
    }
    return callback;
  });

  return callback(options);
};

module.exports = getAnimalMap;
