const mongoose = require('mongoose');


const DB_LINK = "mongodb://127.0.0.1:27017/admin";

const connect = async () => {
    mongoose.connect(DB_LINK);
    console.log("DB connected!")
}

module.exports = connect;