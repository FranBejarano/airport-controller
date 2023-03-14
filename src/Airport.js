const Plane = require("./Plane");
const Weather = require(`./Weather`);

class Airport {

  planesAtAirport = [];
  airportId;

  constructor(airportId = `factory`, airportCapacity = 10) {

    this.airportId = airportId;
    this.airportCapacity = airportCapacity;
  }

  landPlane = (plane, weather = false) => {
    if (plane instanceof Plane && this.planesAtAirport.length < this.airportCapacity && this.checkPlanesAtAirport(plane) == false && weather === false) {
      this.planesAtAirport.push(plane)
      plane.setGroundedIn(this.airportId);
    }
  };

  increaseAirportCapacity = addCapacity => {
    if (Number.isSafeInteger(addCapacity) && addCapacity > 0) {
      this.airportCapacity += addCapacity;
    }
  };

  takeOffPlane = (plane, weather = false) => {
    const indexOfPlanesAtAirport = this.planesAtAirport.findIndex(planeTakingOff => planeTakingOff.planeId == plane.planeId);
    if (indexOfPlanesAtAirport > -1 && this.checkPlanesAtAirport(plane) == true && weather === false) {
      this.planesAtAirport.splice(indexOfPlanesAtAirport, 1);
      plane.setGroundedIn();
    }
  };

  checkPlanesAtAirport = plane => {
    let planeFound = false;
    for (let i = 0; i < this.planesAtAirport.length; i++) {
      if (this.planesAtAirport[i].planeId == plane.planeId) {
        planeFound = true;
      }
    }
    return planeFound;
  };

}

module.exports = Airport;
