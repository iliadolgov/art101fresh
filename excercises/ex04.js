
let totalNumber = 0;

// add a button titled click me
$("#needy-button").html("new text");

$("#needy-button").click( function(){

 totalNumber = totalNumber + 3;
 
 let sentence = "I was clicked oh no ";
 let sentenceTwo = "oh no ";
 let totalNumbers= sentence + totalNumber +sentenceTwo;

 $("#needy-button").html(totalNumbers);

});



// when it is clicked 
// add one to the total number

//show the total number
// on our button
// show "clicked totanl number times"


// a top limit 

