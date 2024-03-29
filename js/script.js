/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
In this section an array is created with quote objects and 3 properties: quote, source and tags
***/
var quotes = [
  {
    quote: "God helps those that help themselves",
    source: "Benjamin Franklin.",
    tags: "Inspirational"
  },
  {
    quote: "I came, I saw, I conquered.",
    source: "Julius Caesar.",
    tags: "Business"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    source: "Lao Tzu.",
    tags: "Business"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    source: "Franklin D. Roosevelt.",
    tags: "Self Help"
  },
  {
    quote: "Living an experience, a particular fate, is accepting it fully.",
    source: "Albert Camus.",
    tags: "Inspirational"
  }
];
 // In this part a new property called citation is added and its value to the forth element of the array
quotes[4].citation = "'From the absurd to Revolt' book";
// In this part a new property called year is added and its value to the third element of the array
quotes[3].year = 1945;
console.log(quotes);

// An array of colors is created to change the body background color when a new quote is generated.
var colorArray = ["#3A1F32", "#2F122C", "#DBB27F", "#C26E57", "#516986"];


/***
  2 functions are created: getRandomQuote to get a random quote from the quoteArray and
  getRandomColor to get a random color from the colorArray to change the body background color.
***/

function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

function getRandomColor(){
  var randomColor = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomColor];
};

function printQuote(){
  // In this part a new random quote is requested and stored in randomObject.
  var randomObject = getRandomQuote();
  // The html is created to being rendered in index.html 
  var stringHTML = "";
  stringHTML += '<p class="quote">' + randomObject.quote + '</p>';
  stringHTML += '<p class="source">' + randomObject.source;
  // In this part we check if the object has citation, year or tags properties.
  if(randomObject.hasOwnProperty("citation")){
    stringHTML += '<span class="citation">' + randomObject.citation + '</span>';
  }
  if(randomObject.hasOwnProperty("year")){
    stringHTML += '<span class="year">' + randomObject.year + '</span>';
  }
  if(randomObject.hasOwnProperty("tags")){
    stringHTML += '<span class="tags"> Tags: ' + randomObject.tags + '</span>';
  }
  stringHTML += '</p>';
  // The final stringHTML is rendered in the view.
  document.getElementById('quote-box').innerHTML = stringHTML;
  /* In this part the color of the background is changed. 
   I got some inspiration from https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp */
  var selectedColor = getRandomColor();
  console.log(selectedColor);
  document.body.style.backgroundColor = selectedColor;
  document.getElementById("loadQuote").style.backgroundColor = selectedColor;
};
console.log(printQuote());

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
setInterval(printQuote, 25000);

// Remember to delete the comments that came with this file, and replace them with your own code comments.