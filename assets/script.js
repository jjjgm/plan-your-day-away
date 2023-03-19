// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
$.when( $.ready ).then(function() {
  // Document is ready.
});
jQuery.now() // time
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () { 

  var currentDay = $("#currentDay")
  var currentTime = dayjs().format("MMM DD YYYY")

  currentDay.text(currentTime)

var currentHour = dayjs().hour()
for (let i = 9; i < 18; i++) {
  var parentId = $("#hour-" + i)
  if (i < currentHour){
    parentId.children("textarea").addClass
    ("past")
  } }//create one for past present and future & switchfrom css  past present future
pastHour.text(pastTime)

  var pastHour = dayjs().hour()
for (let i = 9; i < 18; i++) {
  var parentId = $("#hour-" + i)
  if (i < pastHour){
    parentId.children("textarea").addClass
    ("future")
};
}
  // TODO: Add a listener for click events on the save button. This code should

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  var obj = jQuery.parseJSON( '{ "name": "John" }' );
$( "p" ).click(function() {
  $( this ).slideUp();
});


  $( "body" ).data(typeof "some string"; );

  $( "span" ).first().text( $( "div" ).data( "test" ).first );
$( "span" ).last().text( $( "div" ).data( "test" ).last );

  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  var input = $( ":button" ).addClass( "marked" );
$( "div" ).text( "For this type jQuery found " + input.length + "." );
// Prevent the form from submitting
$( "form" ).submit(function( event ) {
  event.preventDefault();
});
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  function colorEm() {
    var $div = $( "div" );
    var start = Math.floor( Math.random() * $div.length );
    var end = Math.floor( Math.random() * ( $div.length - start ) ) +
      start + 1;
    if ( end === $div.length ) {
      end = undefined;
    }
    $div.css( "background", "" );
    if ( end ) {
      $div.slice( start, end ).css( "background", "yellow" );
    } else {
      $div.slice( start ).css( "background", "yellow" );
    }
    $( "span" ).text( "$( 'div' ).slice( " + start +
      (end ? ", " + end : "") +
      ").css( 'background', 'yellow' );" );
  }
   
  $( "button" ).click( colorEm );
  
  
  //How can Day.js be used to get the
  // current hour in 24-hour time?
  //


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


