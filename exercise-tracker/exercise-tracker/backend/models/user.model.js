
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//The structure of the query
//create validations for the username
const userSchema = new Schema({

    username: {

        type: String,
        required : true,
        unique : true,
        trim : true,
        minlength : 3,

    },
},
{

    timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;