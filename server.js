const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

require('dotenv').config();

const users = require("./routes/api/users");
const app = express();

// Bodyparser middleware //
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());

require("./config/passport")(passport);

// Connect to Database
mongoose.connect(process.env.MONGO || URI,{ useNewUrlParser: true,  useUnifiedTopology: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));


//Routes
app.use("/api/users", users);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));