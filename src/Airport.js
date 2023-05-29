const Plane = require("./Plane");
const Weather = require(`./Weather`);

class Airport {

  planesAtAirport = [];
  airportId;

  /**
   * Constructor of the class
   * @param {} airportId 
   * @param {*} airportCapacity 
   */ 
  constructor(airportId = `factory`, airportCapacity = 10) {

    this.airportId = airportId;
    this.airportCapacity = airportCapacity;
  }

  /**
   * A plane can land if the passed parameter is an instance of Plane class, if there is space at the airport, if the plane is already in the airport and if the weather allows landing the plane
   * @param {*} plane 
   * @param {*} weather 
   */
  landPlane = (plane, weather = false) => {
    if (plane instanceof Plane && this.planesAtAirport.length < this.airportCapacity && this.checkPlanesAtAirport(plane) == false && weather === false) {
      this.planesAtAirport.push(plane)
      plane.setGroundedIn(this.airportId);
    }
  };

  /**
   * Increase the default capacity of the airport
   * @param {*} addCapacity 
   */
  increaseAirportCapacity = addCapacity => {
    if (Number.isSafeInteger(addCapacity) && addCapacity > 0) {
      this.airportCapacity += addCapacity;
    }
  };

  /**
   * A plane can take off if the plane is already in the airport (looking for its position) and if the weather allows taking off the plane
   * @param {*} plane 
   * @param {*} weather 
   */
  takeOffPlane = (plane, weather = false) => {
    const indexOfPlanesAtAirport = this.planesAtAirport.findIndex(planeTakingOff => planeTakingOff.planeId == plane.planeId);
    if (indexOfPlanesAtAirport > -1 && this.checkPlanesAtAirport(plane) == true && weather === false) {
      this.planesAtAirport.splice(indexOfPlanesAtAirport, 1);
      plane.setGroundedIn();
    }
  };

  /**
   * Checks if a plane is already in the airport
   * @param {*} plane 
   * @returns a boolean indicating if the plane is in the airport
   */
  checkPlanesAtAirport = plane => {
    let planeFound = false;
    for (let planeSearched of this.planesAtAirport) {
      if (planeSearched.planeId == plane.planeId) {
        planeFound = true;
      }
    }
    return planeFound;
  };

}

module.exports = Airport;
