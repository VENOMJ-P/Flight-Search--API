const {CityRepository} = require('../repository/index');

class CityServices{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = this.cityRepository.createCity(data)
            return city;
        } catch (error) {
            console.log("Something wrong in Service layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            const city = this.cityRepository.deleteCity(cityId);
            return city;
        } catch (error) {
            console.log("Something wrong in Service layer");
            throw {error};
        }
    }

    async updateCity(cityId,data) {
        try {
            const city = this.cityRepository.updateCity(cityId,data)
            return city;
        } catch (error) {
            console.log("Something wrong in Service layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city  = this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something wrong in Service layer");
            throw {error};
        }
    }

    async getAllCities() {
        try {
            const cities  = this.cityRepository.getAllCities();
            return cities;
        } catch (error) {
            console.log("Something wrong in Service layer");
            throw {error};
        }
    }
}

module.exports = CityServices;