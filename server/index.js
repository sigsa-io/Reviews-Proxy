const path = require ('path');
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'client', 'dist');

var express = require('express');
var app = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var ServerOne = 'http://localhost:3000';
var ServerTwo = 'http://localhost:3002';
var ServerThree = 'http://localhost:3004';
const port = 3001;

app.use('/:restaurantId',express.static(DIST_DIR));

app.all('/restaurantName/:restaurantId', function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: ServerOne});
});

app.all('/bookingCount/:restaurantId', function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: ServerOne});
});

app.all('/seatingSize/:restaurantId', function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: ServerOne});
});

app.all('/targettimeslots/:restaurantId', function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: ServerOne});
});

app.all('/reservations/:restaurantId', function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: ServerOne});
});

app.all('/menuData/:restaurantId', function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: ServerTwo});
});

app.all('/restaurants/:restaurantId/reviews',function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: ServerThree});
});

app.listen(port, () => {
  console.log(`Sigsa - app listening on port ${port}!`);
});
