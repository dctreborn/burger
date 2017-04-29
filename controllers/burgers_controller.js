var app = require("express");
var router = app.Router();

var burger = require("../models.burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data){
		vars hbsObj = {
			burgers: data
		};
		res.render("index", hbsObj);
	});
});

router.post("/", function(req, res){
	burger.create(["burger_name", "devoured"],
		[req.body.burger_name, req.body.devoured],
		function(){
			res.redirect("/");
		});
});

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	burger.update({
		devoured: req.body.devoured
	}, condition, function(){
		res.redirect("/");
	});
});