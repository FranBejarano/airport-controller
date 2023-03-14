const { assertEquals } = require(`../testing-framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);
const Weather = require(`../src/Weather`);

let expected, actual, result, airport, plane, weather;

// ******************** USER CASE 1 ****************************

//Test 1 - `planesAtAirport` length increases when `landPlane` is called with an instance of `Item`
console.log(`\n*** START TEST 1 - \`planesAtAirport\` length increases when \`landPlane\` is called with an instance of \`Item\` ***`)

//Arrange
airport = new Airport();
plane = new Plane(`plane1`);
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 1 - \`planesAtAirport\` length increases when \`landPlane\` is called with an instance of \`Item\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 1 ***`)

//Test 2 - `landPlane` should only add `Plane` instances to the `planesAtAirport`
console.log(`\n*** START TEST 2 - \`landPlane\` should only add \`Plane\` instances to the \`planesAtAirport\``)

//Arrange
airport = new Airport();
plane = `helicopter`;
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 2 - \`landPlane\` should only add \`Plane\` instances to the \`planesAtAirport\`: ${result ? `Passed` : `Failed`} ***`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 2 ***`)

//Test 3 - Edge Case - falsy values should not be added to `planesAtAirport`
console.log(`\n*** START TEST 3 - Edge Case - falsy values should not be added to \`planesAtAirport\` ***`)

//Arrange
airport = new Airport();
plane = null;
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 3 - Edge Case - falsy values should not be added to \`planesAtAirport\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 3 ***`)

// ******************** USER CASE 2 ****************************

//Test 4 - Set a default airport capacity to 10
console.log(`\n*** START TEST 4 - Set a default airport capacity to 10 ***`)

//Arrange
airport = new Airport();
expected = 10;

//Act
actual = airport.airportCapacity;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 4 - Set a default airport capacity to 10: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 4 ***`)

//Test 5 - `increaseAirportCapacity` increases `airportCapacity` by the Integer passed as parameter (2)
console.log(`\n*** START TEST 5 - \`increaseAirportCapacity\` increases \`airportCapacity\` by the Integer passed as parameter (2) ***`)

//Arrange
airport = new Airport();
expected = 12;

//Act
airport.increaseAirportCapacity(2);
actual = airport.airportCapacity;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 5 - \`increaseAirportCapacity\` increases \`airportCapacity\` by the Integer passed as parameter (2): ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 5 ***`)

//Test 6 - Edge Case -`increaseAirportCapacity` should not increase `airportCapacity` when an Integer is not passed (`a`) and keep default capacity
console.log(`\n*** START TEST 6 - Edge Case - \`increaseAirportCapacity\` should not increase \`airportCapacity\` when an Integer is not 
                passed (\`a\`) and keep default capacity ***`)

//Arrange
airport = new Airport();
expected = 10;

//Act
airport.increaseAirportCapacity(`a`);
actual = airport.airportCapacity;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 6 - Edge Case - \`increaseAirportCapacity\` should not increase \`airportCapacity\` when an Integer is not 
                passed (\`a\`) and keep default capacity: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 6 ***`)

//Test 7 - Edge Case - falsy values should not be added to `airportCapacity`
console.log(`\n*** START TEST 7 - Edge Case - falsy values should not be added to \`airportCapacity\` ***`)

//Arrange
airport = new Airport();
expected = 10;

//Act
airport.increaseAirportCapacity(null);
actual = airport.airportCapacity;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 7 - Edge Case - falsy values should not be added to \`airportCapacity\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 7 ***`)

//Test 8 - Edge Case - `increaseAirportCapacity` should not accept negative numbers
console.log(`\n*** START TEST 8 - Edge Case - \`increaseAirportCapacity\` should not accept negative numbers ***`)

//Arrange
airport = new Airport();
expected = 10;

//Act
airport.increaseAirportCapacity(-1);
actual = airport.airportCapacity;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 8 - Edge Case - \`increaseAirportCapacity\` should not accept negative numbers: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 8 ***`)

// ******************** USER CASE 3 ****************************

//Test 9 - When `planesAtAirpot` = `airportCapacity` then `landPlane` does not add planes to the airport
console.log(`\n*** START TEST 9 - When \`planesAtAirpot\` = \`airportCapacity\` then \`landPlane\` does not add planes to the airport ***`)

//Arrange
airport = new Airport();
let planes = 10;
for (let i = 0; i < planes; i++) {
    airport.planesAtAirport.push(new Plane(`plane${i}`));
}
expected = 10;

//Act
airport.landPlane(new Plane(`OverflowPlane`));
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 9 - When \`planesAtAirpot\` = \`airportCapacity\` then \`landPlane\` does not add planes to the airport: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane, planes = null;

console.log(`\n *** END TEST 9 ***`)

// ******************** USER CASE 4 ****************************

//Test 10 - `planesAtAirpot` length decreases to 0 when Plane is found and removed
console.log(`\n*** START TEST 10 - \`planesAtAirpot\` length decreases to 0 when Plane is found and removed ***`)

//Arrange
airport = new Airport();
plane = new Plane(`plane1`);
airport.landPlane(plane);
expected = airport.planesAtAirport.length - 1;

//Act
airport.takeOffPlane(plane);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 10 - \`planesAtAirpot\` length decreases to 0 when Plane is found and remove: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 10 ***`)

//Test 11 - confirm that the plane has taken off and is not longer in `planesAtAirport`
console.log(`\n*** START TEST 11 - confirm that the plane has taken off and is not longer in \`planesAtAirport\` ***`)

//Arrange
airport = new Airport();
plane1 = new Plane(`plane1`);
plane2 = new Plane(`plane2`);
airport.landPlane(plane1);
airport.landPlane(plane2);
expected = false;

//Act
airport.takeOffPlane(plane2);
actual = airport.checkPlanesAtAirport(plane2);

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 11 - confirm that the plane has taken off and is not longer in \`planesAtAirport\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane1, plane2 = null;

console.log(`\n *** END TEST 11 ***`)

// ******************** USER CASE 5 ****************************

//Test 12 - `landPlane` does not increase `planesAtAirport` when a Plane is already in `planesAtAirport`
console.log(`\n*** START TEST 12 - \`landPlane\` does not increase \`planesAtAirport\` when a Plane is already in \`planesAtAirport\` ***`)

//Arrange
airport = new Airport();
planes = 5;
for (let i = 0; i < planes; i++) {
    airport.planesAtAirport.push(new Plane(`plane${i}`));
}
expected = 5;

//Act
airport.landPlane(`plane2`);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 12 - \`landPlane\` does not increase \`planesAtAirport\` when a Plane is already in \`planesAtAirport\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, planes = null;

console.log(`\n *** END TEST 12 ***`)

//Test 13 - `landPlane` increase `planesAtAirport` by 1 when a Plane is not in `planesAtAirport`
console.log(`\n*** START TEST 13 - \`landPlane\` increase \`planesAtAirport\` by 1 when a Plane is not in \`planesAtAirport\` ***`)

//Arrange
airport = new Airport();
planes = 5;
for (let i = 0; i < planes; i++) {
    airport.planesAtAirport.push(new Plane(`plane${i}`));
}
expected = 6;

//Act
airport.landPlane(new Plane(`plane6`));
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 13 - \`landPlane\` increase \`planesAtAirport\` by 1 when a Plane is not in \`planesAtAirport\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, planes = null;

console.log(`\n *** END TEST 13 ***`)

//Test 14 - `landPlane` increase `planesAtAirport` by 1 when a Plane is not in `planesAtAirport`
console.log(`\n*** START TEST 14 - \`takeOffPlane\` does not decrease \`planesAtAirport\` when a Plane is not in \`planesAtAirport\` ***`)

//Arrange
airport = new Airport();
planes = 5;
for (let i = 0; i < planes; i++) {
    airport.planesAtAirport.push(new Plane(`plane${i}`));
}
expected = 5;

//Act
airport.takeOffPlane(new Plane(`plane6`));
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 14 - \`takeOffPlane\` does not decrease \`planesAtAirport\` when a Plane is not in \`planesAtAirport\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, planes = null;

console.log(`\n *** END TEST 14 ***`)

//Test 15 - `takeOffPlane` decrease `planesAtAirport` by 1 when a Plane is in `planesAtAirport`
console.log(`\n*** START TEST 15 - \`takeOffPlane\` decrease \`planesAtAirport\` by 1 when a Plane is in \`planesAtAirport\` ***`)

//Arrange
airport = new Airport();
planes = 5;
for (let i = 0; i < planes; i++) {
    airport.planesAtAirport.push(new Plane(`plane${i}`));
}
expected = 4;

//Act
plane = new Plane(`plane2`);
airport.takeOffPlane(plane);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 15 - \`takeOffPlane\` decrease \`planesAtAirport\` by 1 when a Plane is in \`planesAtAirport\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane, planes = null;

console.log(`\n *** END TEST 15 ***`)

// ******************** USER CASE 6 ****************************

//Test 16 - check if the weather generator returns a weather
console.log(`\n*** START TEST 16 - check if the weather generator returns a weather ***`);

// Arrange
let kindOfWeather = [`sunny`, `stormy`];
weather = new Weather();
let weatherToday = weather.weatherGenerator();
expected = true;

// Act
for (let i = 0; i < kindOfWeather.length; i++) {
    if (kindOfWeather[i].match(weatherToday)) {
        actual = true;
        break;
    } else {
        actual = false;
    }
};

// Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 16 - check if the weather generator returns a weather: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
kindOfWeather, weather, weatherToday = null;

console.log(`\n *** END TEST 16 ***`)

//Test 17 - prevent a plane does not take off when the weather is stormy by checking it stays in `planesAtAirport`
console.log(`\n*** START TEST 17 - prevent a plane does not take off when the weather is stormy by checking it stays in \`planesAtAirport\` ***`);

// Arrange
weather = new Weather();
weatherToday = weather.isStormy(`stormy`);
airport = new Airport();
plane1 = new Plane(`plane1`);
plane2 = new Plane(`plane2`);
airport.landPlane(plane1);
airport.landPlane(plane2);
expected = 2;

// Act
airport.takeOffPlane(plane2, weatherToday);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 17 - prevent a plane does not take off when the weather is stormy by checking it stays in \`planesAtAirport\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
kindOfWeather, weather, weatherToday = null;

console.log(`\n *** END TEST 17 ***`)

// ******************** USER CASE 7 ****************************

//Test 18 - prevent a plane of landing when the weather is stormy by checking it is not added to `planesAtAirport`
console.log(`\n*** START TEST 18 - prevent a plane of landing when the weather is stormy by checking it is not added to \`planesAtAirport\` ***`);

// Arrange
weather = new Weather();
weatherToday = weather.isStormy(`stormy`);
airport = new Airport();
plane = new Plane(`plane1`);
expected = 0;

// Act
airport.landPlane(plane, weatherToday);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 18 - prevent a plane of landing when the weather is stormy by checking it is not added to \`planesAtAirport\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
kindOfWeather, weather, weatherToday = null;

console.log(`\n *** END TEST 18 ***`)

// ******************** USER CASE 7 ****************************

//Test 19 - `planesGrounded` returns an `Airport` where the plane is ground
console.log(`\n*** START TEST 19 - \`planesGrounded\` returns an \`Airport\` where the plane is ground ***`);

// Arrange
airportEDI = new Airport(`EDI`);
airportGLA = new Airport(`GLA`);
plane = new Plane(`plane1`);
expected = `EDI`;

// Act
airportEDI.landPlane(plane);
actual = plane.groundedIn;

// Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 19 - \`planesGrounded\` returns an \`Airport\` where the plane is ground: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airportEDI, airportGLA, plane = null;

console.log(`\n *** END TEST 19 ***`)

//Test 20 - `planesGrounded` returns an `flying` when a plane takes off from an airport
console.log(`\n*** START TEST 20 - \`planesGrounded\` returns an \`flying\` when a plane takes off from an airport ***`);

// Arrange
airportEDI = new Airport(`EDI`);
plane = new Plane();
airportEDI.landPlane(plane);
expected = `flying`;

// Act
airportEDI.takeOffPlane(plane);
actual = plane.groundedIn;

// Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 20 - \`planesGrounded\` returns an \`flying\` when a plane takes off from an airport: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airportEDI, airportGLA, plane = null;

console.log(`\n *** END TEST 20 ***`)