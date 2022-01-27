const data = require('../data/zoo_data');

const { species, employees } = data;

const createCoverageAll = () => employees.map((worker) => { 
    const object = {
      id: worker.id, 
      fullName: `${worker.firstName} ${worker.lastName}`, 
      species: worker.responsibleFor.map((id) => species.find((animal) => animal.id === id).name), 
      locations: worker.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).location),
    }; 
    return object;
});

const getEmployeesCoverage = (obj) => {
  if (!obj) {
    return createCoverageAll();
  }

  if (obj.name !== undefined) {
    return createCoverageAll().find((element) => element.fullName.includes(obj.name) === true);
  }
    
  if (obj.id !== undefined) {
    return createCoverageAll().find((element) => element.id === obj.id);
  }
};

module.exports = getEmployeesCoverage;
