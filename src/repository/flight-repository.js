const{ Flight } = require('../models/index');


class FlightRepository {
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
}
module.exports = FlightRepository;
