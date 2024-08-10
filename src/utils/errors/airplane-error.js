class AirPlaneError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.explantion = message;
    }
}

module.exports = AirPlaneError