const {City} = require('../models/index');

class CityRepository{
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("Something went wrong occured in Repository layer of city");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destory({
                where:{
                    id:cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong occured in Repository layer of city");
            throw {error};
        }
    }
    async update(cityId,data){
        try {
            const city = await City.update(data,{
                where:{
                    id:cityId
                }
            }); 
            return city;
        } catch (error) {
            console.log("Something went wrong occured in Repository layer of city");
            throw {error};
        }
    }

    async getCity(){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong occured in Repository layer of city");
            throw {error};
        }
    }
}

module.exports= CityRepository;