
var getJSON = require('get-json');

var CronJob = require('cron').CronJob;

new CronJob('*/2 * * * * *', function() {

  getJSON(`http://patriot777.zzz.com.ua/patriot777.php?VKlogger`).then(function(response) {
        
    //console.clear();
    //console.log(response);
 })
   .catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');

new CronJob('0 */2 * * * *', function() {

  getJSON(`http://patriot777.zzz.com.ua/patriot777.php?status`).then(function(response) {
        
    //console.clear();
    //console.log(response);
 })
   .catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');

new CronJob('*/3 * * * * *', function() {

  getJSON(`http://patriot777.zzz.com.ua/megabot.php?check_msg`).then(function(response) {
        
    //console.clear();
    //console.log(response);
 })
   .catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');

new CronJob('0 */2 * * * *', function() {

  getJSON(`http://patriot777.zzz.com.ua/megabot.php?Other`).then(function(response) {
        
    //console.clear();
    //console.log(response);
 })
   .catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');
