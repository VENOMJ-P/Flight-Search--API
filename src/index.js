const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require("./config/serverConfig.js")
const setupStartServer = async ()=>{
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    

    app.listen(PORT,()=>{
        console.log(`Successfully server started at ${PORT}`);
    });
}

setupStartServer();