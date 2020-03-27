
const router = require("express").Router();
let User = require("../models/user.model");

//Endpoint for incomming HTTP get request for /.
router.route("/").get((req, res)=> {
   User.find()

.then(users => res.json(users))
.catch(err => res.status(400).json("Error: " + err));

});
//Endpoint for the HTTP post request, add new user.
//Create a new instance of the username
//.save() method to ad new user to the DB
//Return  .then(() => res.json("User Added!!")) and add it.
router.route("/add").post((req, res)=>{
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json("User Added!!"))
    .catch(err => res.status(400).json("Error: " + err));

});

module.exports = router;
