// JavaScript Document

let main = document.querySelectorAll('main');
let submitButton = document.querySelector('input[type="submit"]');
// Error 1 documant to document
let body = document.querySelector('body'); 

// Error 2 change action to click 

submitButton.addEventListener('click', function() { 
// Error 3 Added input variable data
  let input = document.querySelector('input[type="text"]');
  let personName = input.value; 
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  // Error 4 Changed Paragraph to para
  // Error 5 Selected 0 element of main as Queryselector all returns array
  main[0].appendChild(para);
  body.setAttribute('class', 'meow'); 
  console.log('=^..^='); 
}); 