
var getJSON = require('get-json');

var CronJob = require('cron').CronJob;

new CronJob('*/2 * * * * *', function() {

  getJSON(`http://patriot777.zzz.com.ua/patriot777.php?heroku&VKlogger`).then(function(response) {
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);});

   getJSON(`http://patriot777.zzz.com.ua/megabot.php?heroku&check_msg`).then(function(response) {
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');

new CronJob('*/4 * * * * *', function() {

  getJSON(`http://patriot777.zzz.com.ua/megabot.php?heroku&send_msg`).then(function(response) {
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);});

}, null, true, 'Europe/Moscow');

new CronJob('0 */2 * * * *', function() {

  getJSON(`http://patriot777.zzz.com.ua/patriot777.php?heroku&status`).then(function(response) {  
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);}); 

  getJSON(`http://patriot777.zzz.com.ua/megabot.php?heroku&other`).then(function(response) { 
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);}); 

//   getJSON(`http://patriot777.zzz.com.ua/index.php`).then(function(response) { 
//     //console.clear();
//     //console.log(response);
//  }).catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');
