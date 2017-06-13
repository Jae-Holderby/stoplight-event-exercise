

  // Toggle Stoplight on and off
  document.getElementById('stopButton').addEventListener('click', function() {
    document.getElementById('stopLight').classList.toggle("stop")
  });

// Toggle slowLight on and off
document.getElementById('slowButton').addEventListener('click', function() {
  document.getElementById('slowLight').classList.toggle("slow")
});

// Toggle goLight on and off
document.getElementById('goButton').addEventListener('click', function() {
  document.getElementById('goLight').classList.toggle("go")
});

// Console log mouse movement on element
document.getElementById('stopButton').addEventListener('mouseenter', function() {
  console.log("Entered " + document.getElementById('stopButton').innerHTML + " button")
});

document.getElementById('slowButton').addEventListener('mouseenter', function() {
  console.log("Entered " + document.getElementById('slowButton').innerHTML + " button")
});

document.getElementById('goButton').addEventListener('mouseenter', function() {
  console.log("Entered " + document.getElementById('goButton').innerHTML + " button")
});

// Console log mouse movement off element
document.getElementById('stopButton').addEventListener('mouseleave', function() {
  console.log("Left " + document.getElementById('stopButton').innerHTML + " button")
});

document.getElementById('slowButton').addEventListener('mouseleave', function() {
  console.log("Left " + document.getElementById('slowButton').innerHTML + " button")
});

document.getElementById('goButton').addEventListener('mouseleave', function() {
  console.log("Left " + document.getElementById('goButton').innerHTML + " button")
});

var stopClicks = 0;
var slowClicks = 0;
var goClicks = 0;
document.getElementById('controls').addEventListener('click', function(e) {
    if(stopClicks % 2 !== 0 && e.target.innerHTML === "Stop") {
    console.log(e.target.innerHTML + "bulb off")
    stopClicks++
  } else if (stopClicks % 2 === 0 && e.target.innerHTML === 'Stop'){
    console.log(e.target.innerHTML + "bulb on")
    stopClicks++
  } else if (slowClicks % 2 !== 0 && e.target.innerHTML === 'Slow') {
    console.log(e.target.innerHTML + "bulb off")
    slowClicks++
  } else if (slowClicks % 2 === 0 && e.target.innerHTML === 'Slow'){
    console.log(e.target.innerHTML + "bulb on")
    slowClicks++
  } else if (goClicks % 2 !== 0 && e.target.innerHTML === 'Go') {
    console.log(e.target.innerHTML + "bulb off")
    goClicks++
  } else if (goClicks % 2 === 0 && e.target.innerHTML === 'Go'){
    console.log(e.target.innerHTML + "bulb on")
    goClicks++
  }
})
