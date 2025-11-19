// store all creatures in an array, initially empty
let allCreatures = [];

// read data from the form and return a creature object
function getCreatureFromForm() {
  
  const freshCreature={
    name: $("#crName").val(),
    color: $("#crColor").val(),
    eyesNum: $("#crEyesNum").val()
  };

  return freshCreature;
}

// check if creature data is valid
function isCreatureValid(creature) {
  if (creature.name === "") return false;
  if (creature.name.length > 12) return false;
  if ( isNaN(creature.eyesNum) || creature.eyesNum > 5) return false;
  return true;
}

// prepare HTML for a single creature (does NOT add to the page)
function renderCreature(creature) {
  let crEyesHTML = "";

  for (let i = 0; i < creature.eyesNum; i++) {
    crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
  }

  const html=`
<div class="creature">
  <div class="creature-body" style="background: ${creature.color}">${crEyesHTML}
  </div>
  <div class="creature-info">${creature.name}</div>
</div>
`;
  return html;
}

// append one creature to the DOM using its HTML
function addCreatureToDOM(creature) {
  const html = renderCreature(creature);
  $("#creature-list").append(html);
}

// clear all form fields
function clearForm() {
  $("#crName").val("");
  $("#crColor").val("#ee7dea");  // or keep previous if you prefer
  $("#crEyesNum").val(1);
}


// clear the list and render all creatures from the array
function renderAllCreatures() {
  $("#creature-list").empty();
  allCreatures.forEach(function (c) {
    addCreatureToDOM(renderCreature(c));
  });
}


// render all creatures in random order (uses the creatures array)
function renderAllCreaturesRandom() {
  $("#creature-list").empty();

  const shuffled = allCreatures.slice().sort(() => Math.random() - 0.5);

  shuffled.forEach(function (c, i) {
    const $creature = $(renderCreature(c)).hide(); 
    $("#creature-list").append($creature);
    $creature.delay(i * 120).fadeIn(300);  
  });
}

// main add click handler
  // create creature object based on form inputs
  // do safety checks, stop program if something is wrong
  // save the new creature to the creatures array
  // show the new creature on the page
  // reset the form

// main click handler
$("#add-creature").click(function () {
 
 // create creature object based on form inputs
  const newCreature = getCreatureFromForm();

  // do checks, exit function if something is wrong
  if (isCreatureValid(newCreature)==false) {
    return;
  }

  allCreatures.push(newCreature);   // remember it
  addCreatureToDOM(newCreature);    // show it
  clearForm();                      // reset the form
});




$("#shuffle-creatures").click(renderAllCreaturesRandom);







/* before Nov 18
$("#add-creature").click(
    function () {

        // grab the value from the input
        let crName = $("#crName").val();
        let crColor= $("#crColor").val();
        let crEyesNum= $("#crEyesNum").val();
        let crEyesHTML="";

        for (let i = 0; i < crEyesNum ; i++){
            crEyesHTML=crEyesHTML + "<div class=eye>.</div>";
        }


        // check for the field value do not add empty ones
        if ( (crName == "") || (crName.length>12) ) { // do nothing 
        }
        else {
            $("#creature-list").append(`
<div class="creature">
    <div class="creature-body" style="background: ${crColor}">${crEyesHTML}</div>
    <div class="creature-info">${crName}</div>
</div>
`);
        }

        // remove the name after it's added
        $("#crName").val("");

    });

*/
