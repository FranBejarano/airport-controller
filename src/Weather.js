class Weather {

    weatherNow;

    constructor(weatherNow = `sunny`) {
        this.weatherNow = weatherNow;
    }

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

    isStormy(weatherNow) {

        return weatherNow === `stormy`;
    }
}

module.exports = Weather;