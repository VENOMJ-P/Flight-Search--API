const {Flights} = require('../models/index');

class FlightRepository {
    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            console.log(flight);
            return flight;
        } catch (error) {
            console.log("Something went wrong occured in Repository layer of flight");
            throw {error};
        }
    }
}

module.exports=FlightRepository;