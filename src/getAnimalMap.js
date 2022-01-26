const data = require('../data/zoo_data');

const { species } = data;

const locationAnimals = () => {
  return species
    .reduce((acc, specie) => {
      const { location } = specie;

      acc[location] = species
      .filter((animal) => animal.location === location)
      .map((element) => element.name);
  
      return acc;
    }, {});
};

const namedAnimals = () => {
  return species
    .reduce((acc, specie) => {
      const { location } = specie;

      acc[location] = species
      .filter((animal) => animal.location === location)
      .map((element) => {
        const nameResidents = [];
        element.residents.forEach((resident) => nameResidents.push(resident.name)) ; 
        
        const test = {};
        test[element.name] = nameResidents;
        return test;
      });
      return acc;
    }, {});
};

const getAnimalMap = (options) => {
  if (!options || ) {
    return locationAnimals();
  }

  if (!options.includeNames || options.includeNames === false) {
    return locationAnimals();
  }

  if (options.includeNames === true) {
    return namedAnimals();
  }

  if (options.sorted === true) {
    return 'oi';
  }
};

module.exports = getAnimalMap;

console.log(getAnimalMap({ includeNames: true }));
// console.log();