var express = require('express');
var app = express();
var cors = require('cors');
var mongoose = require('mongoose');
const {env} = require('process');
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
//calling routes
const route=require('./routes/routes');
const productRoutes=require('./routes/p_routes');
var passport = require("passport")
app.use(passport.initialize());
app.use(passport.session());
const multer = require('multer');
// const multer = require('multer');
app.use('/api', route);
app.use('/product',productRoutes);
//calling routes



// app.use(multer({storage:fileStorage}).fields([{name:'images',maxCount:1},{name:'images1',maxCount:1},{name:'images2',maxCount:1},{name:'images3',maxCount:1}]))

// server
const Port = process.env.PORT || 3000
app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`);
})
// server

Error
app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error('Something went wrong'));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});





// ***********************************************************************
// wasted code
// ***********************************************************************

// var bodyParser=require('body-parser');

// app.use(bodyParser.urlencoded({extended: true}));

// app.use(bodyParser.json())
// app.use(bodyParser({limit:'50mb'}))

// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
