class Weather {

    weatherNow;

    /**
     * Constructor of Weather class
     * @param {*} weatherNow 
     */
    constructor(weatherNow = `sunny`) {
        this.weatherNow = weatherNow;
    }

    /**
     * Generates a random weather condition. 75% chances of sunny weather and 25% chance of rain weather
     * @returns a weather condition
     */
    weatherGenerator() {

        let randomNum = Math.floor(Math.random() * (4 - 2 + 1) + 2);

        if (randomNum === 1 || randomNum === 2 || randomNum === 3) {
            this.weatherNow = `sunny`;
        }
        else {
            this.weatherNow = `stormy`;
        }

        return this.weatherNow;
    };

    /**
     * Checks if the weather condition is stormy
     * @param {*} weatherNow 
     * @returns a boolean. True when stormy, false otherwise
     */
    isStormy(weatherNow) {

        return weatherNow === `stormy`;
    }
}

module.exports = Weather;