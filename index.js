
var getJSON = require('get-json');

var CronJob = require('cron').CronJob;

new CronJob('*/2 * * * * *', function() {

  getJSON(`https://tanktastic.000webhostapp.com/patriot777.php?heroku&VKlogger`).then(function(response) {
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);});

   getJSON(`https://tanktastic.000webhostapp.com/megabot.php?heroku&check_msg`).then(function(response) {
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');

new CronJob('*/4 * * * * *', function() {

  getJSON(`https://tanktastic.000webhostapp.com/megabot.php?heroku&send_msg`).then(function(response) {
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);});

}, null, true, 'Europe/Moscow');

new CronJob('0 */2 * * * *', function() {

  getJSON(`https://tanktastic.000webhostapp.com/patriot777.php?heroku&status`).then(function(response) {  
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);}); 

  getJSON(`https://tanktastic.000webhostapp.com/megabot.php?heroku&other`).then(function(response) { 
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');

new CronJob('0 */3 * * * *', function() {

  getJSON(`https://testvkapi-patriot777.000webhostapp.com/update.php?heroku`).then(function(response) { 
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');
