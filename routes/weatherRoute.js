const express = require("express");

let weatherRouter = express.Router(),
{
    search,
    
} = require("../controller/weatherController");

weatherRouter.put("/search",search);

module.exports = weatherRouter;