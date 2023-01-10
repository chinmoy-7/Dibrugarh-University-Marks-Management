const mongoose = require("mongoose")

mongoose.set("strictQuery", false);
const connectDB = () => {
    return mongoose.connect(process.env.DB_URL).then(() => {
        console.log("DB Connected");
    }).catch((e) => {
        console.log(e.message);
    })
}

module.exports = connectDB;