const {FlightRepository,AirplaneRepository} = require('../repository/index.js');
const {compareTime} = require('../utils/helper.js')

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            if(compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'Arrival time cannot be greater than Departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ... data, totalSeats:airplane.capacity
            });  // ...obj is used to desturcturing the object 
            return flight;
        } catch (error) {
            console.log("Something wrong in Service layer");
            throw {error};
        }
    }

    async getAllflightData(data){
        try {
            const flights =  await this.flightRepository.getAllFlight(data);
            return flights;
        } catch (error) {
            console.log("Something wrong in Service layer");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something wrong in Service layer");
            throw {error};
        }
    }

    async updateFlight(flightId,data){
        try {
            const response = await this.flightRepository.updateFlight(flightId,data);
            return response;
        } catch (error) {
            console.log("Something wrong in Service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;