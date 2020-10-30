const express = require("express");
const router = express.Router();
// Importing model to usedatabase functions.
var burger = require("../models/burger.js");

//create the router for the app upon first render
router.get("/", function(req, res) {
    burger.all(function(data) {
      let hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
});
//add burger
router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [
        req.body.newBurg, 0],
        function(result) {
        // Send back the ID of the new burger created
        res.json({ id: result.insertId });
    });
});
//update the burgers
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;


    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            //no rows changed throw 404 error
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});  

//exporting routes to be used by the server
module.exports = router;