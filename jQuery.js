//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”//
$(function() {
  console.log("Let's get ready to party with jQuery!");
});


//Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).//
$('article img').addClass('image-center');


//Remove the last paragraph in the article.//
$('article p').last().remove();


//Set the font size of the title to be a random pixel size from 0 to 100.//
const randomSize = Math.floor(Math.random() * 101); // generate a random number between 0 and 100
$('#title').css('font-size', randomSize + 'px');


//Add an item to the list; it can say whatever you want.//
const $list = $('ol');
$list.append('<li>She\'s so cute!</li>');
$list.append('<li>Her name is Korra.</li>');


//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.//
$(document).ready(function() {
    $("aside").empty();
    $("<p>").text("We apologize for the previous list's existence.").appendTo("aside");
});


//When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.//
$(document).ready(function() {
    // listens for changes to the input elements
    $('input[type="number"]').on('change', function() {

      // gets the values of the three input elements
      let redValue = $('input:eq(0)').val();
      let blueValue = $('input:eq(1)').val();
      let greenValue = $('input:eq(2)').val();
      
      // sets the background color of the body to match the input values
      $('body').css('background-color', 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')');
    });
  });


//Add an event listener so that when you click on the image, it is removed from the DOM.//
$(document).ready(function() {
  // Adds click event listener to the image
  $('img').click(function() {
    // Removes the image from the DOM
    $(this).remove();
  });
});

