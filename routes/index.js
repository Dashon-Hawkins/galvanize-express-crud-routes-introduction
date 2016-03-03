var express = require('express');
var router = express.Router();
var pg = require('pg');

var app = express();

var connectionString = 'postgres://localhost/mydatabase';

function runQuery (query, callback) {
  pg.connect(connectionString, function (err, client, done) {
    if (err) { done() ; console.log(err); return; }
    client.query(query, function (err, results) {
      done();
      if (err) { console.log(err); return; }
      callback(results);
    });
   });
}

router.get('/', function(req, res){
  runQuery('SELECT * FROM country', function(results) {
     res.send(results.rows);
   });
});

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express CRUD' });
// });

module.exports = router;
