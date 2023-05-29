class Plane {

    planeId;
    groundedIn;

    /**
     * Constructor
     * @param {*} planeId 
     * @param {*} groundedIn 
     */
    constructor(planeId = `plane1`, groundedIn = `flying`) {
        this.planeId = planeId;
        this.groundedIn = groundedIn;
    }

    /**
     * Sets the airport where this plane is located
     * @param {*} groundedIn 
     */
    setGroundedIn(groundedIn = `flying`) {
        this.groundedIn = groundedIn;
    }
}

module.exports = Plane;