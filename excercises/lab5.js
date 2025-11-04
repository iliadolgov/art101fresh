
function askNumber(whatNumber) {

    let userNubmer = prompt("Guess 1-10?");

    if (userNubmer == whatNumber) {
        $("#output").html("You got it!");
    }

    else {
        $("#output").html("Noooooope");
    }
}


$("#good-button").click(function () {
    askNumber(5);
});