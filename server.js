const express = require('express');
const app = express();

//set port for application

const port = process.env.PORT || 8080;

//set view engine to ejs
app.set('view engine', 'ejs');

//tell express to look in the public directory for assets
app.use(express.static(_dirname + '/public'));

//set home page route
app.get('/', function(req, res) {
	//ejs render will always look in the views folder automatically
	res.render('index');
});

app.listen(port, function(){
	console.log('Our app is running on http://localhost:' + port);
});