const express = require('express');
const route = require("./routes");
const cors = require("cors")
require("dotenv").config();

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/weather",route.weatherRouter);

app.listen(process.env.PORT || 3005, () => {
	console.log('running server...');
});
