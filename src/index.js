const express = require('express');
const bodyParser = require("body-parser");


const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const CityReopsitory = require('./repository/city-repository');

const setupAndStartSever = async ()=>{
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT,()=>{
        console.log(`server start at the port ${PORT}`);
    });

}

setupAndStartSever();