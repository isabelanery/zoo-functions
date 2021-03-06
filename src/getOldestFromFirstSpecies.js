const data = require('../data/zoo_data');

// Todo código desenvolvido em parceria com Paulo Victor, turma 19 - Tribo A

const getOldestFromFirstSpecies = (id) => {
  const animalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];

  return Object.values(data.species.find((animal) => animal.id === animalId)
    .residents.sort((a, b) => b.age - a.age)[0]);
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
