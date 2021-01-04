const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require("./config/key");
const app = express();

const connect = mongoose.connect
(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
})
.then(() => console.log('Database Connected.....'))
.catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => res.send('Hello World'));
app.use('/user/', require('./routes/users'));

const port = process.env.PORT || 5000
app.listen(port, () => console.log('App is running on ', port));