const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//The structure of the query
//All the information types we will store in the DB 
const exerciseSchema = new Schema({

    username: {
                    type: String, required : true},

    description: {
                    type: String, required : true},

    duration:{ 
                    type: Number, required : true},

    date: {
                    type: Date, required : true},

    }, {

            timestamps: true,
});

const Exercise = mongoose.model("Exercise",exerciseSchema);

module.exports = Exercise;