/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
  {
    quote: "God helps those that help themselves",
    source: "Benjamin Franklin."
  },
  {
    quote: "I came, I saw, I conquered.",
    source: "Julius Caesar."
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    source: "Lao Tzu."
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    source: "Franklin D. Roosevelt."
  },
  {
    quote: "Living an experience, a particular fate, is accepting it fully.",
    source: "Albert Camus."
  }
];

quotes[4].citation = "'From the absurd to Revolt' book";
quotes[3].year = 1945;
console.log(quotes);



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber];
};


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(){
  var randomObject = getRandomQuote();
  var stringHTML = "";
  stringHTML += '<p class="quote">' + randomObject.quote + '</p>';
  stringHTML += '<p class="source">' + randomObject.source;
  if(randomObject.hasOwnProperty("citation")){
    stringHTML += '<span class="citation">' + randomObject.citation + '</span>';
  }
  if(randomObject.hasOwnProperty("year")){
    stringHTML += '<span class="year">' + randomObject.year + '</span>';
  }
  stringHTML += '</p>';
  document.getElementById('quote-box').innerHTML = stringHTML;
};
console.log(printQuote());

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.