class Plane {

    planeId;
    groundedIn;

    constructor(planeId = `plane1`, groundedIn = `flying`) {
        this.planeId = planeId;
        this.groundedIn = groundedIn;
    }

    setGroundedIn(groundedIn = `flying`) {
        this.groundedIn = groundedIn;
    }
}

module.exports = Plane;