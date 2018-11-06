const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4500;

mongoose.connect( 'mongodb://localhost/SNS', { useNewUrlParser: true } );

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cors());
app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({limit: '2mb', extended: true}));
app.use(morgan('dev')); //middleware se ejecuta como una funcion
//app.use(express.json());
app.use(express.static('public'));

app.set('port',process.env.PORT || 8000);

require('./src/routes')(app, {})

app.listen(PORT, () => {
	console.log("LISTENING ON PORT " + PORT)
})
