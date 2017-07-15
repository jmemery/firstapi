const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

const session = require('express-session');

app.use(session({secret: 'ajewfiafj298f294fa8f 28fj 29jf a8 o'}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/static')));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, ()=> console.log("listening on 8000"))