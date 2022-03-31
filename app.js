const express = require('express');
const route = require("./routes");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/weather",route.weatherRouter);

app.listen(process.env.PORT || 3005, () => {
	console.log('running server...');
});
