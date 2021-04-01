// let timer;              // Timer identifier
// const waitTime = 5000;   // Wait time in milliseconds

// // Listen for `keyup` event
// const userText = document.querySelector('#user_txt').value;
// userText.addEventListener('keyup', (e) => {
//     const text = e.currentTarget.value;

//     // Clear timer
//     clearTimeout(timer);

//     // Wait for X ms and then process the request
//     timer = setTimeout((text) => { 
//       document.getElementById('user_txt').innerHTML = ''; 
//     }, waitTime);
// });


var fade_out = function() {
    document.getElementById("user_txt").fadeOut(300).innerHTML = '';
}
  
setTimeout(fade_out, 5000);