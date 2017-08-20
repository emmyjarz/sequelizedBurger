//Router file, control what to show on the page for each route.
var express = require("express");

var router = express.Router();

// Import the model (burger_controller.js) to use its database functions.
// var burger = require("../models/burger.js");
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    db.Burger.findAll().then(data => {

        res.render("index", { burgers: data });
    });
});

router.post("/", (req, res) => {

    console.log(req.body)
    db.Burger.create({
        name: req.body.name
    }).then(() => {

        res.redirect("/")
    })

});
router.put("/:id", (req, res) => {
    db.Burger.update({
        devoured: req.body.devoured
    }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.redirect("/");
        });
});

module.exports = router;