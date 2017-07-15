const mongoose = require('mongoose');

//import models e.g.:
const Person = mongoose.model('Person');

module.exports = {
	index: (req, res) => {
		Person.find({}, (err, foundPerson) => {
			if(err){
				res.json(err);
			} else{
				res.json(foundPerson);
			}
		})
	},
	
	new: (req, res) => {
		let person = new Person({name: req.params.name});
		person.save( (err, savedPerson) => {
			if(err){
				res.json(err);
			} else{
				res.json(savedPerson);
			}
		})
	},

	remove: (req, res) => {
		Person.remove({name: req.params.name}, (err) => {
			if(err){
				res.json(err)
			} else{
				res.redirect('/');
			}
		})
	},

	person: (req, res) => {
		Person.find({name: req.params.name}, (err, foundPerson) => {
			if(err){
				res.json(err);
			} else {
				res.json(foundPerson);
			}
		})
	},
	
}
