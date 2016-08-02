var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  // var regular_clock = new Clock('')
  // var alarmed_clock = new Clock('')

  $('#set').click(function(event) {
    event.preventDefault();
    var set_time = $('#set_time').val();
    $('#set_time').val("");
    $('.showAlarm').text("You have set an alarm for " + set_time + ".");
    var alarm_time = moment(set_time, "hh:mm: a");
    var ourAlarm = new Alarm(alarm_time);
    var checkAlarm = setInterval(alarmStop, 1000);
    function alarmStop(){
      if (ourAlarm.alarmGo()) {
        $('.alarmNow').text("Awake Up!!! Alarm is going off!");
        clearInterval(checkAlarm);
      }
    }



    //
    //
    // var ourClock = new Clock ("blue");
    // var myVar = setTimeout(ourClock.alarm, 3000)
    // var output = ourClock.alarm(set_time);
    // if
    // $('.alarmNow').text("Awake Up!!! Alarm is going off!");
  });
});
