var exec = require('child_process').exec;

var schedule = require('node-schedule');


var j = schedule.scheduleJob('* * */12 * * *', function(){
    exec("ls -l", function(error, stdout, stderr) {
        console.log("Posting to Twitter!");
        
    });

});