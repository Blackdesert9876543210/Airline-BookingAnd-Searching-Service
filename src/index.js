const express = require('express');
const bodyParser = require("body-parser");

const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const {db,Airplane} = require('./models/index');

const setupAndStartSever = async ()=>{
    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT,async ()=>{
        console.log(`server start at the port ${PORT}`);
       if(process.env.SYNC_DB){
        db.sequelize.sync({alter: true});
       }
       await Airplane.create({
         modelNumber: 'Airbus A330',
         capacity: 150
       })
    });

}

setupAndStartSever();