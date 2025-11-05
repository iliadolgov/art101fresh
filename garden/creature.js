

$("#add-creature").click(
    function () {

        // grab the value from the input
        let crName = $("#crName").val();

        // check for the field value do not add empty ones
        if ( (crName == "") || (crName.length>12) ) { // do nothing 
        }
        else {
            $("#creature-list").append(crName + ", ");
        }

        // remove the name after it's added
        $("#crName").val("");

    });


