const {FlightService}= require('../services/index')

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(200).json({
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
        return res.status(200).json({
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
module.exports  = {
    create,
    getAll
}