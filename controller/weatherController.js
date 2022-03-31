require("dotenv").config();
const axios = require("axios");
let APIkey = process.env.WEATHER_API_KEY;

exports.search = async (req, res) => {
    try {

        let zipCode = req.body.zipCode;
        let countryCode = req.body.countryCode;
        let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${APIkey}`);
        if (!weatherData.data) {
            res.status(400).json("Error!please type correct.");
        }
        res.status(200).json(weatherData.data);
    }
    catch (err) {
        res.status(404).json(err.message);
    }
};
