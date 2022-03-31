require("dotenv").config();
const axios = require("axios");
let APIkey = process.env.WEATHER_API_KEY;

exports.search = async (req, res) => {
    try {
        let { cityName, cityId, cityCoordinte, cityZipCode } = req.query;

        let city =  req.body.city
        let countryCode =req.body.countryCode
        let weatherData = {};
        if (cityName) {
            weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);
        }
        if (cityId) {
            weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${APIkey}&units=metric`);
        }
        if (cityCoordinte) {
            weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city}&lon=${countryCode}&appid=${APIkey}&units=metric`);
        }
        if (cityZipCode) {
            weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${city},${countryCode}&appid=${APIkey}&units=metric`);
        }
        if(!weatherData.data.main){
            res.status(400).json("Error!please type correct.");
        }
        res.status(200).json(weatherData.data);
    }
    catch (err) {
        res.status(404).json(err.message);
    }
};