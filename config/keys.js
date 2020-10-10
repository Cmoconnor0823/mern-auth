require("dotenv").config();


const localmd = process.env.MONGO;
const cloudmd = URI;
console.log(localmd, "this should pring the local db connection");
 
module.exports = {
    mongoLocalURI: localmd,
    mongoURI: cloudmd,
    secretOrKey: "secret"
};