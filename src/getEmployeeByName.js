const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const findYou = data.employees.find((employee) => (employeeName === employee.firstName
    || employeeName === employee.lastName));

  return (employeeName === undefined ? {} : findYou);
};

module.exports = getEmployeeByName;
