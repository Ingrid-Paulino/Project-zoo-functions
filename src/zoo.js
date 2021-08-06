const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  return ids.map((id) => species.find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalSelected = species.find((animalElement) => animalElement.name === animal);
  return animalSelected.residents.every((elementAnimal) => elementAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  // I placed the code more smaller for lint to stay happy
  const emp = employeeName;
  if (!emp) return {};
  return employees.find((person) => person.firstName === emp || person.lastName === emp);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  const newCollaborator = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push((newCollaborator));
  return newCollaborator;
}

function isManager(id) {
  // seu código aqui
  return employees.some((personCollaborator) => personCollaborator.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newObj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newObj);
  return newObj;
}

function countAnimals(especiess) {
  // seu código aqui

}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) return 0;

  const adult = prices.Adult * (entrants.Adult || 0);
  const child = prices.Child * (entrants.Child || 0);
  const senior = prices.Senior * (entrants.Senior || 0);
  return adult + child + senior;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui

}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
