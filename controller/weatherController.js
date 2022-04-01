require("dotenv").config();
const axios = require("axios");
let APIkey = process.env.WEATHER_API_KEY;

exports.search = async (req, res) => {

    try {
        let zipCode = req.body.zipCode;
        let countryCode = req.body.countryCode;
        try {
            let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${APIkey}`);
            res.status(200).json(weatherData.data);
        } catch (error) {
            res.status(400).json("please type correct zip code");
        }
        
    }
    catch (err) {
        res.status(500).json(err.message);
    }
};
