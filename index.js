const express = require("express");
const mongoose = require('mongoose');
const Marks = require('./models/marks.model.js');
const marksRoute = require("./routes/marks.route.js");
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/marks", marksRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});


mongoose.connect("mongodb+srv://sakshamrana898:a31MHZFD7kyyEEo8@backenddb2.o434rjz.mongodb.net/CRUD2?retryWrites=true&w=majority&appName=BACKENDDB2")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Connection failed");
    });