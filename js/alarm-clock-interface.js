var Alarm = require('./../js/alarm-clock.js').clockModule;

$(document).ready(function() {
  // var regular_clock = new Clock('')
  // var alarmed_clock = new Clock('')

  $('#alarm_clock-form').submit(function(event) {
    event.preventDefault();
    var set_time = $('#set_time').val();
    console.log(set_time);
    // var ourClock = new Clock ("blue");
    // var myVar = setTimeout(ourClock.alarm, 3000)
    // var output = ourClock.alarm(set_time);
  });
});
