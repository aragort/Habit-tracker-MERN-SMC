
const express = require("express");

const cors = require("cors");
//Help to conect with MongoDB Database
const mongoose = require("mongoose");


require("dotenv").config();

//Create express server
const app =express();
const port = process.env.PORT || 4000;

//Alows to parser Json
app.use(cors());
app.use(express.json());


//Start Database conection
//.env file has the link I took from the MongoDb cluster to conect the DB.
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true
    })
    .then(() => console.log("DB Connected!"))
    .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
    });



//Created a port for User and Exercise pages
const exercisesRouter = require("./routes/exercises");

const usersRouter = require("./routes/users");

//Use the files depending on /...

app.use("/exercises", exercisesRouter);

app.use("/users", usersRouter);



//Port 4000
app.listen(port, ()=> {
    console.log(`server running on port: ${port}`);
});
