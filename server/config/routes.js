const controller = require('./../controllers/controller.js');

module.exports = app => {
	// app.HTTP_VERB(url, callback);
	app.get('/', controller.index);
	app.get('/new/:name', controller.new);
	app.get('/remove/:name', controller.remove);
	app.get('/:name', controller.person);
}