//var dosmth = require("./dosmth.js");
var express = require('express');
var router = express.Router();
var sqldata = require('./sqldata.js'); //haetaan luokka joka hoitaa sql sydeemeit
var sqldatahaku = new sqldata; // 
//var randomiii = new sqldata();
//https://javascript.info/async-await
//https://itnext.io/using-async-await-to-write-cleaner-route-handlers-7fc1d91b220b
//GET

router.get('/categories',function(req, res, next) {
  sqldatahaku.getinfo('Category','1',function(err,result){
    if (err) throw err;
    res.json(result);
    next();
  });
});

router.get('/subcat', function(req, res, next) {
  sqldatahaku.getinfo('subCat','1',function(err, result){
    if (err) throw err;
    res.json(result);
    next();
  });
});
/*
router.get('/items5', function(req, res, next) {
  sqldatahaku.getquery('SELECT * FROM junk INNER JOIN Coordinates ON junk.junkID=Coordinates.ID',function(err, result){
    if (err) throw err;
    res.json(result);
    next();
  });
});
*/

router.get('/kuva', function(req, res, next){
  res.sendFile(`${__dirname}/randomi.jpg`)
})



//POST
router.post('/subcatstatus', function(req, res, next) {
  sqldatahaku.querypost(`UPDATE subCat SET Status = ${req.body.Status} WHERE subId = ${req.body.subId}`)
    console.log(`Status ${req.body.Status} subId ${req.body.subId}`)
    res.end();
});

router.post('/catADD', function(req,res) {
    sqldatahaku.queryinsert(req.body.catname,'1',req.body.catname,'imagereferenssi');
});

/*
router.post('/subcatADD', function(req,res) {
  sqldatahaku.queryinsert(req.body.subcatname,'1',req.body.catname,'imagereferenssi');
});
*/

module.exports = router






/*
app.post('/subcatADD', function(req,res) {
  var newsubCat = {
    catid:req.body.catid,
    subcatname:req.body.subcatname.toString(),
    subcatstatus:1//req.body.subcatstatus
  };
  var insertQuery = "INSERT INTO subCat ( CatId, subName, Status ) values (?,?,?)";
  connection.query(insertQuery, [newsubCat.catid, newsubCat.subcatname, newsubCat.subcatstatus], function(err, result) {
      if (err) {
          connection.rollback(function() {
              throw err;
          });
      }});
      res.end();
});
*/