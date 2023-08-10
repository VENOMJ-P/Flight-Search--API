const express = require("express");
const {PORT} = require("./config/serverConfig.js")
const setupStartServer = async ()=>{
    const app = express();

    app.listen(PORT,()=>{
        console.log(`Successfully server started at ${PORT}`);
    });
}

setupStartServer();