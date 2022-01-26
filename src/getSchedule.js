const data = require('../data/zoo_data');

// Todo código desenvolvido em parceria com Paulo Victor, turma 19 - Tribo A

const getDayAnimal = (curr) => data.species.filter((animal) => animal.availability
  .some((item) => item === curr))
    .map((element) => element.name);

const scheduleTargetUndefined = () => {
  const days = Object.keys(data.hours); 
  const hours = Object.values(data.hours);

  return days.reduce((acc, curr, index) => {
    if (hours[index].open === 0) {
      acc[curr] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!', 
      };
    } else { 
      acc[curr] = {
        officeHour: `Open from ${hours[index].open}am until ${hours[index].close}pm`,
        exhibition: getDayAnimal(curr),
      };
    }
    return acc;
  }, {});
};

const notAnimalNorDays = (target) => {
  const days = Object.keys(data.hours); 
  const animals = data.species.map((element) => element.name); 
  const verify = [...days, ...animals]; 
  
  return verify.some((element) => element === target); 
}; 

const hourAndAnimals = (day) => {
  const obj = {}; 
  // const days = Object.keys(data.hours);
  const fullSchedule = scheduleTargetUndefined(); 
  obj[day] = fullSchedule[day];

  return obj;
};

const animalDays = (target) => data.species.find((element) => element.name === target).availability;

const getSchedule = (target) => {
  if (!target) {
    return scheduleTargetUndefined();
  }

  if (notAnimalNorDays(target) === false) {
    return scheduleTargetUndefined();
  }

  if (Object.keys(data.hours).some((element) => element === target)) {
    return hourAndAnimals(target); 
  }

  if (data.species.map((element) => element.name).some((item) => item === target)) {
    return animalDays(target); 
  }
};

console.log(getSchedule('Monday'));

// console.log(notAnimalNorDays('lions'));

module.exports = getSchedule;
