
function addCreatureObject(

const creatureNew={
name: 

}

);



$("#crAdd").click(function () {

    let crName=$("#crName").val();

    $("#creature-list").append("<div>"+crName+"</div>");

    //$("#crName").val("")

});