const data = require('../data/zoo_data');

const { species } = data;

const locationAnimals = () => {
  const mapAnimals = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  return species
    .reduce((acc, specie) => {
      const { name, location } = specie;
      (acc[location]).push(name);
      return acc;
    }, mapAnimals);
};

const namedAnimals = () => {
  const mapAnimals = { NE: [], NW: [], SE: [], SW: [],}; 

  return species
    .reduce((acc, specie) => {
      const { name, location, residents } = specie;
      (acc[location].push(name)); 

      const namingAnimal = {}; 
      namingAnimal[name] = []; 
      specie.name = namingAnimal;
  
      // residents.forEach((resident) => {

      // });
      return acc; 
     }, mapAnimals);
     

}

// const callMap = (animal) => { 
//   const namingAnimal = {}; 
//   namingAnimal[animal] = [];

//   animal = namingAnimal;
//   return animal;
// }

// const namedAnimals = () => {
  
//   const mapedAnimals = locationAnimals(); 

//   mapedAnimals.NE = mapedAnimals.NE.map(callMap);

//   return mapedAnimals;

// }

const getAnimalMap = (options) => {
  if (!options) {
    return locationAnimals();
  }

  if (!options.includeNames || options.includeNames === false) {
    return locationAnimals();
  }

  if (options.includeNames === true) {
    return namedAnimals();
  }
};

module.exports = getAnimalMap;

console.log(getAnimalMap({includeNames: true }));
