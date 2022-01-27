const data = require('../data/zoo_data');

// Todo código desenvolvido em parceria com Paulo Victor, turma 19 - Tribo A

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

const findName = (obj) => Object.values(employees)
  .some((element) => element
    .firstName === (obj.name) || element.lastName === (obj.name));

const findId = (obj) => Object.values(employees).some((element) => element.id === obj.id);

const getEmployeesCoverage = (obj) => {
  if (!obj) {
    return createCoverageAll();
  }

  if (findName(obj)) {
    return createCoverageAll().find((element) => element.fullName
      .split(' ')[0] === (obj.name) || element.fullName.split(' ')[1] === (obj.name));
  }

  if (findId(obj)) {
    return createCoverageAll().find((element) => element.id === obj.id);
  }

  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
