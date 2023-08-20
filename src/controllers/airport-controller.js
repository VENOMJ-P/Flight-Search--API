const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created a airport",
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a airport",
            error: error
        });
    }
}

const destroy = async (req,res) => {
    try {
        const response = await airportService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the airport",
            error: error
        });
    }
}

const update = async (req,res) => {
    try {
        const response = await airportService.update(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the airport",
            error: error
        });
    }
}

const get = async (req,res) => {
    try {
        const city = await airportService.get(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully get the airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the airport",
            error: error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const response = await airportService.getAll(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully get the airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the airport",
            error: error
        });
    }
}

module.exports = {
    create,
    update,
    get,
    getAll,
    destroy
}