const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();


const app = express();

// Bodyparser middleware //
app.use(bodyParser.urlencoded({
    extended: false
})
);
app.use(bodyParser.json());

// Connect to Database
mongoose.connect(process.env.MONGO || URI,{ useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const port = process.env.PORT;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));