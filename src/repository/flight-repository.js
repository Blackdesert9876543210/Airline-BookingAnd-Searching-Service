const{ Flight } = require('../models/index');
const{ Op } = require('sequelize');

class FlightRepository {

    // private helper method
    #createFilter(data) {
       let filter = {};
       if(data.arrivalAirportId) {
           filter.arrivalAirportId = data.arrivalAirportId;   
       }
       if(data.departureAirportId) {
        filter.departureAirportId = data.departureAirportId;
       }
    //    if(data.minPrice) {
    //     Object.assign(filter, {[Op.gte]: data.minPrice});
    //    }
    //    if(data.maxPrice) {
    //     Object.assign(filter, {[Op.lte]: data.maxPrice});
    //    }
    let priceFilter = [];
    if(data.minPrice) {
        priceFilter.push({price: {[Op.gte]: data.maxPrice}});
    }
    if(data.maxPrice) {
        priceFilter.push({price: {[Op.lte]: priceFilter}});
    }
    Object.assign(filter, {[Op.and]: priceFilter});
       return filter;
    }
    async createFlight(data) {
        try {
            console.log(Flight);
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const  flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository laryer");
            throw {error};
        }
    }

    // async getAllFlights(filter) {
    //     try {
    //         const filterObject = this.#createFilter(filter);
    //         const flight = await Flight.findAll({
    //             where: filterObject
    //         });
    //         console.log(flight,"this is the filter object");
    //         return flight;
    //     } catch (error) {
    //         console.log("something went wrong in the  dj repository layer");
    //         throw {error};
    //     }
    // }
}
module.exports = FlightRepository;
