const{ City } = require('../models/index');
const { Op } = require('sequelize');


class CityRepository {
    async createCity({ name }){
        try {
            console.log(City);
            console.log("creating a city in repository layer");
            const city = await City.create({
                 name
               });
            return city;
        } catch (error) {
            console.log("some error occured in the repository layer");
            throw {error}; 
        }
       
    }

    async deleteCity( cityId ){
        try {
           await City.destroy({
                where:{
                    id : cityId
                }
            });
            return true;
        } catch (error) {
            console.log("some error occured in the repository layer");
            throw {error}; 
        }
    }

    async updateCity(cityId,data){
        try {
            // the below code will work but will not return the updated city , but in pg sequal it will work 

            const city = await City.update(data,{
                where:{
                    id : cityId
                }
            })
            return true;

            // for mysql 
            // const city = await City.findByPK(cityId);
            // city.name = data.name;
            // await city.save();
            // return city;

        } catch (error) {
            console.log("some error occured in the repository layer");
            throw {error}; 
        }
    }

    async getCity(cityId){
        try {
            console.log("trying get city in the repository layer")
            const city = await City.findByPk(cityId);
            return city;
            // return true;
            
        } catch (error) {
            console.log("some error occured in the repository layer");
            throw {error}; 
        }
    }

    async getAllCities(filter){ // if filer is empty then it will return all the cities
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name : {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("some error occured in the repository layer");
            throw {error}; 
        }
    }
}
module.exports = CityRepository;