const { Flights } = require('../models/index');


class FlightRepository {
    async createFlight(data) {
        try {
            console.log(Flights);
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports = FlightRepository;
