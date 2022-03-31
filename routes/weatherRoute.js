const express = require("express");
const {weatherValidateRules,weatherValidate} = require("../validator/weatherValidator")

let weatherRouter = express.Router(),
{
    search,
    
} = require("../controller/weatherController");

weatherRouter.post("/search",weatherValidateRules(),weatherValidate,search);

module.exports = weatherRouter;