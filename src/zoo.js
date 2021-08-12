const { species, employees, prices, hours } = require("./data");
const data = require("./data");

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
  return employees.find(
    (person) => person.firstName === emp || person.lastName === emp
  );
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
  employees.push(newCollaborator);
  return newCollaborator;
}

function isManager(id) {
  // seu código aqui
  return employees.some((personCollaborator) =>
    personCollaborator.managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
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

function countAnimals(speciess) {
  // seu código aqui
  if (speciess) return species.find((animal) => animal.name === speciess).residents.length;

  return species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
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
  // usar map
  // vamos filtrar por ordem alfabetica e genero , sort
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const filtrarColaboradorId = employees.find((colaborador) => colaborador.id === id);
  const animalId = filtrarColaboradorId.responsibleFor[0];
  const specieDadosId = species.find((resident) => resident.id === animalId);
  const maiorIdade = specieDadosId.residents.sort((a, b) => b.age - a.age);
  const dadosAnimalMaiorAge = maiorIdade[0];
  return Object.values(dadosAnimalMaiorAge);
}

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult = Math.round((percentage / 100) * prices.Adult * 100 + prices.Adult * 100) / 100;
  prices.Senior = Math.round((percentage / 100) * prices.Senior * 100 + prices.Senior * 100) / 100;
  prices.Child = Math.round((percentage / 100) * prices.Child * 100 + prices.Child * 100) / 100;
  return prices;
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