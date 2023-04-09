const express = require('express');
const {PORT} = require('./config/serverConfig');

const setupAndStartSever = async ()=>{
    // create the express object
    const app = express();

    app.listen(PORT,()=>{
        console.log(`server start at the port ${PORT}`);
    });

}

setupAndStartSever();