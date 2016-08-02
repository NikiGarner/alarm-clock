function Alarm(alarm_time) {
  this.time = alarm_time;
}

Alarm.prototype.alarmGo = function() {
  if (this.time.format("HH:mm") === moment().format("HH:mm")) return true;
  else return false;
};


exports.alarmModule = Alarm;
