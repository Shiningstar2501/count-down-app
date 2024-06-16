 
function countdowntimer() {
    var datetimeInput = document.getElementById("date_time");
    var resultElement = document.querySelector(".result");
    
    // Get the selected date and time from the input
    var selectedDateTime = new Date(datetimeInput.value).getTime();
    var now = new Date().getTime();
  
    var timeRemaining = selectedDateTime - now;
  
    if (timeRemaining <= 0) {
      resultElement.textContent = "Time's up!";
    } else {
      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      // Update the result element to display the countdown
      resultElement.textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }
  }
  
  // Example usage:
  // You can call this function when the "START" button is clicked in your HTML code.
  