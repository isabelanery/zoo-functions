const data = require('../data/zoo_data');

const species = data.species; 

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  } 

  return ids.map((searchId) => {
    species.forEach((animal) =>  animal.id === searchId ? searchId = animal : searchId );

    return searchId;
  })

  // const species = data.species; 
  
}

// console.log(getSpeciesByIds('o'));

// console.log(species);

module.exports = getSpeciesByIds;
