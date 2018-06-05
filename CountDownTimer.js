
//Calculate the time remaining 
function getTimeRemaining(endtime) {
  // Get todays date and time
    var now = new Date().getTime();
  // Find the distance between now an the count down date
    var t = endtime - now;
  
  // Time calculations for days, hours, minutes and seconds
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  
  // Return the variables to print in the HTML
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

//Get the elements by Id from the HMTL file
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  
  //update the HTML
  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  // Update the count down every 1 second using the "setInterval" method
  var timeinterval = setInterval(updateClock, 1000);
}

// Set the date until we want to count down
var deadline = new Date("Jun 5, 2018 15:37:25").getTime();

//init the CountDown clock
initializeClock('clockdiv', deadline);