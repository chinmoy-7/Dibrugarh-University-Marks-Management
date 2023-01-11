
// imports
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const connectDB = require("./Connect DB/Connect Db")
const LoginAndSignup = require("./Routes/LoginAndSignup")
const Operations = require("./Routes/Operations")
// App configs
dotenv.config()
const app = express()
app.use(cors())
app.use(morgan("common"))
app.use(express.json())


// logic
app.use("/",LoginAndSignup)
app.use("/",Operations)


// app listen
app.listen(process.env.PORT, async () => {
    await connectDB();
    console.log(`Server up at ${process.env.PORT} !!!!!`);
})