import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 8080;

// //set view engine to ejs
app.set('view engine', 'ejs');

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb');

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// //tell express to look in the public directory for assets
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>
    res.render('index')
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);





// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import routes from './src/routes/crmRoutes';

// const app = express();

// //set port for application
// const port = process.env.PORT || 8080;

// //set view engine to ejs
// app.set('view engine', 'ejs');

// // mongoose connection
// mongoose.Promise = global.Promise;
// mongoose.connect = ('mongodb://localhost/alphaFriends');

// // bodyparser setup
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// routes(app);

// //tell express to look in the public directory for assets
// app.use(express.static(__dirname + '/public'));

// //set home page route
// app.get('/', function(req, res) {
// 	//ejs render will always look in the views folder automatically
// 	res.render('index');
// });

// app.listen(port, function(){
// 	console.log('Our app is running on http://localhost:' + port);
// });