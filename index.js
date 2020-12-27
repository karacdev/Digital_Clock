let date = new Date();

console.log(date)

let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let time = The ${hrs}:${mins}:${secs}
//log the time in console
console.log(time)
}



//using conditonal statements to make it into a 12 hour clock format
//declaring the period variable to keep track of AM and new Promise(function(resolve, reject) {
let period = "AM";
if (hrs == 0) hrs = 12;

if (hrs > 12) {
  hrs = hrs - 12;
  period = "PM";
}
// whenever the number is less than 10 we'll add a 0 in front of it
  hrs = hrs < 10 ? 0${hrs} : hrs;
  hrs = hrs < 10 ? 0${mins} : mins;
  hrs = hrs < 10 ? 0${secs} : secs;
let time = `${hrs}:${mins}:${secs} ${period}}`;
setInterval(clock, 1000);
document.getElementById("clock").innerText = time;
};
clock();
