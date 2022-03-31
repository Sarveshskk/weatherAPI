const express = require("express");

let weatherRouter = express.Router(),
{
    search,
    
} = require("../controller/weatherController");

weatherRouter.post("/search",search);

module.exports = weatherRouter;