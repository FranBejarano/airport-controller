const { assertEquals } = require(`../testing-framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);
const Weather = require(`../src/Weather`);
const { describe } = require("node:test");

describe('Airport', () => { 
    let airport, plane, plane1, expected, actual, weather;

    describe('Instruct the airport to land a plane', () => { 

        beforeEach(() => { 
            airport = new Airport();
        });

        afterEach(() => { 
            expected, actual = undefined;
            airport, plane = null;
        });

        it('Test 1 - `planesAtAirport` length increases when `landPlane` is called with an instance of `Item`', () => { 
            // Arrange
            plane = new Plane(`plane1`);
            expected = 1;

            //Act
            airport.landPlane(plane);
            actual = airport.planesAtAirport.length;

            //Assert
            expect(actual).toEqual(expected);
        });

        it('Test 2 - `landPlane` should only add `Plane` instances to the `planesAtAirport`', () => {
            //Arrange
            plane = `helicopter`;
            expected = 0;

            //Act
            airport.landPlane(plane);
            actual = airport.planesAtAirport.length;

            //Assert
            expect(actual).toEqual(expected);
        });

        it('Test 3 - Edge Case - falsy values should not be added to `planesAtAirport` ', () => {
            //Arrange
            plane = null;
            expected = 0;

            //Act
            airport.landPlane(plane);
            actual = airport.planesAtAirport.length;

            //Assert
            expect(actual).toEqual(expected);
        });       
    });

    describe('Default airport capacity that can be overridden as appropriate', () => {

        beforeEach(() => { 
            airport = new Airport();
        });

        afterEach(() => { 
            expected, actual = undefined;
            airport = null;
        });

        it('Test 4 - Set a default airport capacity to 10', () => { 
            //Arrange
            expected = 10;

            //Act
            actual = airport.airportCapacity;

            //Assert
            expect(actual).toEqual(expected);
        });
        
        it('Test 5 - `increaseAirportCapacity` increases `airportCapacity` by the Integer passed as parameter (2) ', () => {
            //Arrange
            expected = 12;

            //Act
            airport.increaseAirportCapacity(2);
            actual = airport.airportCapacity;

            //Assert
            expect(actual).toEqual(expected);
        });
        
        it('Test 6 - Edge Case -`increaseAirportCapacity` should not increase `airportCapacity` when an Integer is not passed (`a`) and keep default capacity ', () => {
            //Arrange
            expected = 10;

            //Act
            airport.increaseAirportCapacity(`a`);
            actual = airport.airportCapacity;

            //Assert
            expect(actual).toEqual(expected);
        });
        
        it('Test 7 - Edge Case - falsy values should not be added to `airportCapacity` ', () => {
            //Arrange
            expected = 10;

            //Act
            airport.increaseAirportCapacity(null);
            actual = airport.airportCapacity;

            //Assert
            expect(actual).toEqual(expected);
        });
        
        it('Test 8 - Edge Case - `increaseAirportCapacity` should not accept negative numbers ', () => {
            //Arrange
            expected = 10;

            //Act
            airport.increaseAirportCapacity(-1);
            actual = airport.airportCapacity;

            //Assert
            expect(actual).toEqual(expected);
        });        
    });

    describe('Prevent landing when the airport is full', () => { 

        it('Test 9 - When `planesAtAirpot` = `airportCapacity` then `landPlane` does not add planes to the airport ', () => {
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
            expect(actual).toEqual(expected);
        });       
    });

    describe('Instruct the airport to let a plane take off and confirm that it is no longer in the airport', () => { 

        beforeEach(() => { 
            airport = new Airport();
        });

        afterEach(() => {
            expected, actual = undefined;
            airport, plane, plane1, plane2 = null;
        });

        it('Test 10 - `planesAtAirport` length decreases to 0 when Plane is found and removed ', () => {
            //Arrange
            plane = new Plane(`plane1`);
            airport.landPlane(plane);
            expected = airport.planesAtAirport.length - 1;

            //Act
            airport.takeOffPlane(plane);
            actual = airport.planesAtAirport.length;

            //Assert
            expect(actual).toEqual(expected);
        });
        
        it('Test 11 - confirm that the plane has taken off and is not longer in `planesAtAirport` ', () => {
            //Arrange
            plane1 = new Plane(`plane1`);
            plane2 = new Plane(`plane2`);
            airport.landPlane(plane1);
            airport.landPlane(plane2);
            expected = false;

            //Act
            airport.takeOffPlane(plane2);
            actual = airport.checkPlanesAtAirport(plane2);

            //Assert
            expect(actual).toEqual(expected);
        });       
    });

    describe('Prevent asking the airport to let planes take-off which are not at the airport, or land a plane that\'s already landed', () => { 

        beforeEach(() => { 
            airport = new Airport();
            planes = 5;
        });

        afterEach(() => {
            expected, actual, planes = undefined;
            airport = null;
        });

        it('Test 12 - `landPlane` does not increase `planesAtAirport` when a Plane is already in `planesAtAirport` ', () => {
            //Arrange
            for (let i = 0; i < planes; i++) {
                airport.planesAtAirport.push(new Plane(`plane${i}`));
            }
            expected = 5;

            //Act
            airport.landPlane(`plane2`);
            actual = airport.planesAtAirport.length;

            //Assert
            expect(actual).toEqual(expected);
        });
        
        it('Test 13 - `landPlane` increase `planesAtAirport` by 1 when a Plane is not in `planesAtAirport` ', () => {
            //Arrange
            for (let i = 0; i < planes; i++) {
                airport.planesAtAirport.push(new Plane(`plane${i}`));
            }
            expected = 6;

            //Act
            airport.landPlane(new Plane(`plane6`));
            actual = airport.planesAtAirport.length;

            //Assert
            expect(actual).toEqual(expected);
        });
        
        it('Test 14 - `landPlane` increase `planesAtAirport` by 1 when a Plane is not in `planesAtAirport` ', () => {
            //Arrange
            for (let i = 0; i < planes; i++) {
                airport.planesAtAirport.push(new Plane(`plane${i}`));
            }
            expected = 5;

            //Act
            airport.takeOffPlane(new Plane(`plane6`));
            actual = airport.planesAtAirport.length;

            //Assert
            expect(actual).toEqual(expected);
        });
        
        it('Test 15 - `takeOffPlane` decrease `planesAtAirport` by 1 when a Plane is in `planesAtAirport` ', () => {
            //Arrange
            for (let i = 0; i < planes; i++) {
                airport.planesAtAirport.push(new Plane(`plane${i}`));
            }
            expected = 4;

            //Act
            plane = new Plane(`plane2`);
            airport.takeOffPlane(plane);
            actual = airport.planesAtAirport.length;

            //Assert
            expect(actual).toEqual(expected);
        });       
    });

    describe('Prevent takeoff when weather is stormy', () => { 

        beforeEach(() => {
            weather = new Weather();
        });

        afterEach(() => { 
            weather, airport, plane1, plane2 = null;
            expected, actual = undefined;
        });

        it('Test 16 - check if the weather generator returns a weather ', () => {
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
            expect(actual).toEqual(expected);
        });
        
        it('Test 17 - prevent a plane does not take off when the weather is stormy by checking it stays in `planesAtAirport` ', () => {
            // Arrange
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
            expect(actual).toEqual(expected);
        });        
    });

    describe('Prevent landing when weather is stormy', () => {
        
        it('Test 18 - prevent a plane of landing when the weather is stormy by checking it is not added to `planesAtAirport` ', () => {
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
            expect(actual).toEqual(expected);
        });
    });
    
    describe('Planes that have landed must be at an airport', () => {

        beforeEach(() => {
            airportEDI = new Airport(`EDI`);
            plane = new Plane(`plane1`);
        });

        afterEach(() => {
            airportEDI, plane = null;
            expected, actual = undefined;
        });
        
        it('Test 19 - `planesGrounded` returns an `Airport` where the plane is ground ', () => {
            
            // Arrange          
            airportGLA = new Airport(`GLA`);
            expected = `EDI`;

            // Act
            airportEDI.landPlane(plane);
            actual = plane.groundedIn;

            // Assert
            expect(actual).toEqual(expected);
        });
        
        it('Test 20 - `planesGrounded` returns an `flying` when a plane takes off from an airport ', () => {
            // Arrange
            airportEDI.landPlane(plane);
            expected = `flying`;

            // Act
            airportEDI.takeOffPlane(plane);
            actual = plane.groundedIn;

            // Assert
            expect(actual).toEqual(expected);
        });        
    });
});