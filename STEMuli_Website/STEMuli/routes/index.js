var express = require('express');
var router = express.Router();
var mongo = require('mongodb')MongoClient;
var assert=require('assert');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/get-data', function(req,res)
{
var MongoClient=mongodb.MongoClient;

var url = 'mongodb://localhost:27017/STEMuli';

MongoClient.connect(url, function(err,db)
{
  if(err)
  {
    console.log('Unable to Connect to server', err);
  }else{
    console.log('Connection Successful');
    var collection = db.collection('teachers');
    collection.find({}).toArray(function(err,result){
      if(err){
        res.send(err);
      } else if(result.length){
        res.render('teachers',{
          "teacherList":result
        });
      } else{
        res.send('No documents found');
      }
      db.close();
    });
  }

});
});
router.post('/insert', function(req,res{
  res.render('newteacher', {title:'Add Student'});

});

router.post('/update', function(req,res,next){

});

router.post('/delete', function(req,res,next){

});
module.exports = router;
