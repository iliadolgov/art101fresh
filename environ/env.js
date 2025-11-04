
let characterA = {
name: "Pikachu Attreides",
nightPhrase: "I am to excited to sleep I need more ASRM",
dayPhrase: "Time for a brunch",
}

let characterB = {
name: "Pikachu Zendaya",
nightPhrase: "So sleepy actiually",
dayPhrase: "Sleepy even more",
}



function switchTime (nightorday) {

 if(nightorday=="night") {

 $("body").css("background-image", "url(img/dune-night.jpg");
 $("#convo").html("<p>" + characterA.name + " says " + characterA.nightPhrase + "<p>" + characterB.name + " says " + characterB.nightPhrase);

 }
else {
$("body").css("background-image", "url(img/dune.jpg");
 $("#convo").html("<p>" + characterA.name + " says " + characterA.dayPhrase + "<p>" + characterB.name + " says " + characterB.dayPhrase);

}

}

$("#night").click( function() {

 switchTime("night");

});

$("#day").click( function() {

 switchTime("day");

});