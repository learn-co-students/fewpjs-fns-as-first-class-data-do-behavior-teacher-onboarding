/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time_str) {
  const time_array = time_str.split(":")
  const hour = time_array[0]
  if (hour < 12) {
    return "Good Morning"
  } else if (hour > 12 && hour < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const greeting_header = document.getElementById("greeting");
  greeting_header.innerText = string;
}