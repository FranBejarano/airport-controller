const Airport = require('./Airport');
const Plane = require('./Plane');

const airportEDI = new Airport();
const airportGLA = new Airport();

console.log('*** Testing `landPlane` method ***')
airportEDI.landPlane(new Plane('Ryanair'));
airportGLA.landPlane(new Plane('British Airways'));
airportEDI.landPlane(new Plane('British Airways'));

console.log(airportEDI.planesAtAirport);
console.log(airportGLA.planesAtAirport);

console.log('\n*** Testing `increaseAirportCapacity` method ***');
console.log(`airportEdi Default Capacity: ${airportEDI.airportCapacity}`);
airportEDI.increaseAirportCapacity(5);
console.log(`airportEdi New Capacity: ${airportEDI.airportCapacity}`);