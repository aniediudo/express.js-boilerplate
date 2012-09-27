/**
 *	Module Dependencies 
 */
var mongoose = require('mongoose');

//DB Configurations
var	db = mongoose.connect('mongodb://user:password@domain.com:port_number/db_name'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


//Models
var Models = {
	ModelName: require('../models/modelname.js')
};

//ModelName
var ModelName = Models.ModelName.new({
		schema: Schema,
		mongoose: mongoose
});


/*
 * GET modelname (Get All)
 */

exports.all = function(req, res){
	res.send("/modelname - GET ALL");
};


/*
 * GET modelname (Get One)
 */

exports.search = function(req, res){
	res.send("/modelname/:id - SEARCH");	  
};


/*
 * POST modelname (Save One)
 */

exports.add = function(req, res){
	res.send("/modelname/add - ADD");
};


/*
 * PUT modelname (Chnage One)
 */

exports.change = function(req, res){
	res.send("/modelname/change/:id - CHANGE");
};


/*
 * DEL modelname (Remove One)
 */

exports.remove = function(req, res){
	res.send("/modelname/remove/:id - DEL");
};