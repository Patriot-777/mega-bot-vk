var getJSON = require('get-json');

var CronJob = require('cron').CronJob;

new CronJob('*/2 * * * * *', function() {

  getJSON(`https://yaroslav-andreev.ru/megabot/megabot.php?heroku&send_msg`).then(function(response) {
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);});

 getJSON(`https://yaroslav-andreev.ru/patriot777/patriot777.php?heroku&VKlogger`).then(function(response) {
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);});

   getJSON(`https://yaroslav-andreev.ru/megabot/megabot.php?heroku&check_msg`).then(function(response) {
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');

new CronJob('0 */2 * * * *', function() {

  getJSON(`https://yaroslav-andreev.ru/patriot777/patriot777.php?heroku&status`).then(function(response) {  
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);}); 

  getJSON(`https://yaroslav-andreev.ru/megabot/megabot.php?heroku&other`).then(function(response) { 
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);}); 

 getJSON(`https://yaroslav-andreev.ru/oblojki/update.php?heroku`).then(function(response) { 
    //console.clear();
    //console.log(response);
 }).catch(function(error) {console.log(error);}); 

}, null, true, 'Europe/Moscow');
