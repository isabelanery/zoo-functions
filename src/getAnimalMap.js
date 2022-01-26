const data = require('../data/zoo_data');

const { species } = data;

const locationAnimals = () => {
  const mapAnimals = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  mapAnimals.NE = species.filter((animal) => animal.location === 'NE').map((specie) => specie.name);
  mapAnimals.NW = species.filter((animal) => animal.location === 'NW').map((specie) => specie.name);
  mapAnimals.SE = species.filter((animal) => animal.location === 'SE').map((specie) => specie.name);
  mapAnimals.SW = species.filter((animal) => animal.location === 'SW').map((specie) => specie.name);

  return mapAnimals;
};

const getAnimalMap = (options) => {
  if (!options) {
    return locationAnimals();
  }
};

module.exports = getAnimalMap;
