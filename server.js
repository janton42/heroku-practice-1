const express = require('express');
const app = express();

const { Pool } = require('pg');
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: true
});

app.get('db', async (req, res) => {
	try {
		const client = await pool.connect()
		const result = await client.query('SELEC * FROM test_table');
		res.render('pages/db', result);
		client.release();
	} catch (err) {
		console.error(err);
		res.send("Error " + err);
	}
});
//set port for application

const port = process.env.PORT || 8080;

//set view engine to ejs
app.set('view engine', 'ejs');

//tell express to look in the public directory for assets
app.use(express.static(__dirname + '/public'));

//set home page route
app.get('/', function(req, res) {
	//ejs render will always look in the views folder automatically
	res.render('index');
});

app.listen(port, function(){
	console.log('Our app is running on http://localhost:' + port);
});