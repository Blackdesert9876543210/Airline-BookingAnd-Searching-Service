const { CityServices } = require('../services/index');


const cityService = new CityServices();

// post , data -> req.body

const create = async (req , res) => {
   try {
      const city = await cityService.createCity(req.body);
      return res.status(201).json({
        data: city,
        success: true,
        message: `successfully created a city`,
        err: {}
      })
   } catch (error) {
     console.log(error);
     return res.status(500).json({
        data: {},
        success: false,
        message: `Not able to create a city`,
        err: error
     })
   }
}

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
          data: city,
          success: true,
          message: `successfully deleted a city`,
          err: {}
        });
    } catch (error) {
      console.log(error);
      const city = await cityService.createCity(req.params.id);
      return res.status(500).json({
        data:{},
        success: false,
        message: `not able to delete the city`,
        err: error
      });
    }
}

// GET -> /city/:id
const get = async(req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(201).json({
          data: response,
          success: true,
          message: `successfully fetched a city`,
          err: {}
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data:{},
        success: false,
        message: `not able to get the city`,
        err: error
      });
    }
}


// GET -> /city
const getAll = async (req , res) => {
  try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: `successfully get all the cities`,
      err: {}
    })

  } catch (error) {
    console.log(error);
      return res.status(500).json({
        data:{},
        success: false,
        message: `not able to get the cities`,
        err: error
      });
  }
}

// Patch -> /city/:id -> req.body
const update = async (req,res) => {
    try {
      const response = await cityService.updateCity(req.params.id, req.body);
      return res.status(200).json({
        data : response,
        success : true,
        message : 'Successfully fetched a city',
        err : {}
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data:{},
        success: false,
        message: `not able to update the city`,
        err: error
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





