const {FlightService}= require('../services/index')
const {ClientErrorsCodes, SuccessCodes} = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        let flightRequestData = {
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: "Successfully created a flight",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            error: error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const flights = await flightService.getAllflightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: flights,
            success: true,
            message: "Successfully fetch a flight",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch a flight",
            error: error
        });
    }
}

const get = async (req,res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: "Successfully fetch a flight",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch a flight",
            error: error
        });
    }
}

const update = async (req,res) => {
    try {
        const flight = await flightService.updateFlight(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: "Successfully update a flight",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a flight",
            error: error
        });
    }
}
module.exports  = {
    create,
    getAll,
    get,
    update
}