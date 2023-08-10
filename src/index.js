const express = require("express");
const bodyParser = require("body-parser");


const {PORT} = require("./config/serverConfig.js")
const CityRepository = require('./repository/city-repository.js')

const setupStartServer = async ()=>{
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    

    app.listen(PORT,()=>{
        console.log(`Successfully server started at ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({name:"Patna"});
    });
}

setupStartServer();