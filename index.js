require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const goalRouter = require("./routes/goalRouter");

//middleware
app.use(express.json());
app.use(cors())


//route
app.use("/api/goals", goalRouter);


// db connection
const start = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`server running ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start()

app.use((req, res) => {
    res.status(404).send("Resource not found");
})


