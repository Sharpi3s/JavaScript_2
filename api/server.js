const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();


const port = process.env.PORT || 5000;

const serverURI = 'http://localhost:' + port;
const mongoURI = process.env.MONGO_URI


app.listen(port, () => console.log('webbserver: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, () => console.log('Connected to DB'))



