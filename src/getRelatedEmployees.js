const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some((employee) => employee.managers.includes(id));  

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  
  return employees
  .filter((employee) => employee.managers.includes(managerId))
  .map((nameEmployee) => `${nameEmployee.firstName} ${nameEmployee.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };

// console.log(employees);