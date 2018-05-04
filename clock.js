

setInterval(function() {
  updateClock();
}, 1000);

function updateClock() {
  var now = new Date();

  var hour = now.getHours();
  console.log("Hour => ", hour);

  var minute = now.getMinutes();
  console.log("Minute => ", minute);

  var second = now.getSeconds();
  console.log("Second => ", second);

  var hourAngle = (360 * (hour / 12));
  var el = document.getElementById("hour");
  el.style.transform = "rotate(" + hourAngle + "deg)";

  var minAngle = (360 * (minute / 60));
  var el = document.getElementById("minute");
  el.style.transform = "rotate(" + minAngle + "deg)";

  var secAngle = (360 * (second / 60));
  var el = document.getElementById("second");
  el.style.transform = "rotate(" + secAngle + "deg)";
}
