
var getJSON = require('get-json');

var CronJob = require('cron').CronJob;

new CronJob('*/2 * * * * *', function() {

  getJSON(`http://patriot777.zzz.com.ua/tests.php`).then(function(response) {
        
    console.clear();
    console.log(response);
 })
   .catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');

new CronJob('0 */2 * * * *', function() {

  getJSON(`http://patriot777.zzz.com.ua/status.php`).then(function(response) {
        
    console.clear();
    console.log(response);
 })
   .catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');
