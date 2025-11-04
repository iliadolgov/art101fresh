// declaring an array with name myCommutes
let myCommutes=["metro bus", "UCSC taps bus", "personal bike", "rental bike", "some random car", "friends"];

// declaring an object with name myCommutes
let myFavouriteCommute={
    type: "Bus",
    route: 1,
    print: "Mountain Lion",
    hasMiddleDoor: true,
    drivers: ["Elena", "Alex", "the guy with a read beard"],
};

let megaSentence;

megaSentence="<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";

megaSentence=megaSentence + "<p>My favourite commute posseses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0];

$("#output").html(megaSentence);


let myCat={
    name: "Lazy",
    ears: 2,
    color: "pink",
    hasKittens: true,
    purr: function (){ console.log("purrrrrr")},
};