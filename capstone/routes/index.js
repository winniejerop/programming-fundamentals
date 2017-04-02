var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
//var flash = require('connect');




/* GET home page. */
router.get('/', function(req, res, next) {
    

  res.render('index', { title: 'Scraping'});
});

router.get('/thank_you', function(req, res, next) {
    

  res.render('finish', { title: 'Scraping'});
});
router.post('/urls',function(req,res,next){
    var url=req.body.url;
   request(url, function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  

  var $ = cheerio.load(body);
   var links = $('a');
  $(links).each(function(i,link) {
    
    fs.appendFileSync('public/urls.txt', $(link).attr('href') + '\n');
  });
  console.log("Status code: " + response.statusCode);

});
//req.flash('info', 'Links updated successfully');
res.redirect('/thank_you');
});
module.exports = router;

