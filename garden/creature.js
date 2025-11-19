// memorize all creatures in array

let allCreatures = [];

// main add click handler
  // create creature object based on form inputs
  // safety check-ups
  // prepare an html for a single creature
 
  // print single creature on a page
  // add the creature to the memory
  // reset the from

function getCreatureFromForm(){ 

    const freshCreature={
    name: $("#crName").val(),
    color: $("#crColor").val(),
    eyesNum: $("#crEyesNum").val()
    };

    return freshCreature;

};

// prepare HTML for a single creature (does NOT add to the page)
function renderCreature(creature) {
  let crEyesHTML = "";

  for (let i = 0; i < creature.eyesNum; i++) {
    crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
  }

  const html=`
<div class="creature">
  <div class="creature-body" style="background: ${creature.color}">
${crEyesHTML}
  </div>
  <div class="creature-info">❤️${creature.name}</div>
</div>
`;
  return html;
}


// append one creature to the DOM using its HTML
function addCreatureToDOM(creature) {
  const html = renderCreature(creature);
  $("#creature-list").append(html);
}

// check if creature data is valid
function isCreatureValid(creature) {
  if (creature.name === "") return false;
  if (creature.name.length > 12) return false;
  if (creature.eyesNum=="" || creature.eyesNum > 5) return false;
  return true;  
}

// clear all form fields
function clearForm() {
  $("#crName").val("");
  $("#crColor").val("#ee7dea");  // or keep previous if you prefer
  $("#crEyesNum").val(1);
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

$("#add-creature").click(
    function () {

    // create creature object based on form inputs
    const newCreature = getCreatureFromForm();

    // do checks, exit function if something is wrong
   if ( isCreatureValid(newCreature)==false) {
    return;
   }
   
   allCreatures.push(newCreature);   // remember it
   addCreatureToDOM(newCreature);    // show it
   clearForm();

    });

$("#shuffle-creatures").click(
function (){
  renderAllCreaturesRandom();

});


// ---------- DRAG & DROP (FUNCTION VERSION) ----------

let draggedCreature = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

function startDraggingCreature(event) {
  draggedCreature = $(this);

  const offset = draggedCreature.offset();
  dragOffsetX = event.pageX - offset.left;
  dragOffsetY = event.pageY - offset.top;

  draggedCreature.css({
    position: "absolute",
    left: offset.left,
    top: offset.top,
    "z-index": 1000,
    cursor: "grabbing"
  });

  event.preventDefault();
}

function dragCreature(event) {
  if (!draggedCreature) return;

  draggedCreature.css({
    left: event.pageX - dragOffsetX,
    top: event.pageY - dragOffsetY
  });
}

function stopDraggingCreature() {
  if (draggedCreature) {
    draggedCreature.css({ cursor: "grab" });
  }
  draggedCreature = null;
}

// event bindings
$(document).on("mousedown", ".creature", startDraggingCreature);
$(document).on("mousemove", dragCreature);
$(document).on("mouseup", stopDraggingCreature);




/*

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

*/