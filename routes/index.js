var express = require('express');
var router = express.Router();
var testFolder = require('../path');

var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

 
router.get('/folderpath/:path', function(req, res, next) {
  
  console.log(testFolder['path']+req.params.path);
  let addpath = req.params.path.replace(/~/g, '/');
  console.log(testFolder['path'], req.params.path, addpath);
  fs.readdir(testFolder['path']+addpath, function(error, filelist){
    if(error){
      res.send([]);
    }
    else
      res.send(filelist);
  })

});




module.exports = router;
