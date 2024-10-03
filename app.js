//import express
const express = require('express');
// import mangoose
const mongoose = require('mongoose');
// import the feed routes
const feedRoutes = require('./routes/feed');
// create the express app
const app = express();
// to parse incoming json
app.use(express.json());
// forward any incoming request that starts with '/feed' to feedRoutes
app.use('/feed', feedRoutes);
// setup a database connection using mongoose
// past the connection string given from your atlas server
mongoose
  .connect(
    'mongodb://app_user:password@medium-cluster-shard-00-00.tw6br.mongodb.net:27017,medium-cluster-shard-00-01.tw6br.mongodb.net:27017,medium-cluster-shard-00-02.tw6br.mongodb.net:27017/feeds?ssl=true&replicaSet=atlas-xyz-shard-0&authSource=admin&retryWrites=true&w=majority'
  )
  .then(result => {
    // listen to incoming requests on port 8080
    app.listen(3000);
  })
  .catch(err => console.log('err', err))