const {CityServices} = require("../services/index");

const cityServices = new CityServices();

const create= async (req,res) => {
    try {
        console.log("contoller");
        const city = await cityServices.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            error: error
        });
    }
}

const destroy = async (req,res) => {
    try {
        const response = await cityServices.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the city",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the city",
            error: error
        });
    }
}

const update = async (req,res) => {
    try {
        const city = await cityServices.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully updated the city",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            error: error
        });
    }
}

const get = async (req,res) => {
    try {
        const city = await cityServices.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully get the city",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            error: error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const cities = await cityServices.getAllCities();
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Successfully get the city",
            error: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the city",
            error: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}