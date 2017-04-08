//add a zero in front of the number if the number is less than 10
function checkTime(i) {
    // check if number is less than 10
    if (i < 10) {
        // adds zero in front of number
        i = "0" + i
    }

    // send back new value
    return i
}

function startTime () {

	// stores time in a variable
	var currentTime = new Date()

	//store the current hours, minutes, and seconds in variables
	var hour = currentTime.getHours()
	var minute = currentTime.getMinutes()
	var second = currentTime.getSeconds()

	//change military time to standard time if hours are greater than 12
	if (hour > 12) {
		hour = hour -12;
	}

	//update variable minute and second using checkTime function
	minute = checkTime(minute)
	second = checkTime(second)

	//select element with the id="time" and change the text to the current time
	document.getElementById('time').textContent = hour + ":" + minute + ":" + second

	//recalls the function every second, time becomes dynamic
	setTimeout(function () {
			startTime()
			updateClock(currentTime)
	},1000)

}


	function updateClock(currentTime) {
		var secHand = document.getElementById("sec-hand").style;
		var minHand = document.getElementById("min-hand").style;
		var hrHand = document.getElementById("hr-hand").style;

	secHand.transform = "rotate(" + currentTime.getSeconds() * 6 + "deg)";
	minHand.transform = "rotate(" + currentTime.getMinutes() * 6 + "deg)"; 
	hrHand.transform = "rotate(" + (currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5) + "deg)";


	}


	//add event listener to start cintion so finally time will be deployed
	document.getElementById('time').addEventListener('onload', startTime(), false)