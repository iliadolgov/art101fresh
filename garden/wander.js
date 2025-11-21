// -----------------------------------------------------
//  WANDERING SYSTEM — FULL FILE
// -----------------------------------------------------

// list of creatures with motion data
let wanderingCreatures = [];

// global pause flag
let wanderingPaused = false;


// -----------------------------------------------------
//  Initialize wandering for all creatures currently in DOM
// -----------------------------------------------------
function startWanderingAll() {
  $("#creature-list .creature").each(function () {
    startWanderingOne(this);
  });

  requestAnimationFrame(wanderLoop);
}


// -----------------------------------------------------
//  Start wandering for ONE creature DOM node
// -----------------------------------------------------
function startWanderingOne(domNode) {

  const speed = 0.5 + Math.random() * 1.5; // speed between 0.5–2
  const angle = Math.random() * Math.PI * 2;

  wanderingCreatures.push({
    el: domNode,
    x: 0,
    y: 0,
    dx: Math.cos(angle) * speed,
    dy: Math.sin(angle) * speed
  });

  // ensure absolute positioning
  $(domNode).css({
    position: "absolute"
  });
}


// -----------------------------------------------------
//  Freeze + Resume
// -----------------------------------------------------
function freezeWandering() {
  wanderingPaused = true;
}

function resumeWandering() {
  wanderingPaused = false;
}


// -----------------------------------------------------
//  Main wandering loop
// -----------------------------------------------------
function wanderLoop() {

  // If paused — skip movement but continue animation frame
  if (!wanderingPaused) {

    const area = $("#creature-list");
    const A_width = area.width();
    const A_height = area.height();

    wanderingCreatures.forEach(obj => {

      const el = $(obj.el);

      // read current position
      const pos = el.position();
      obj.x = pos.left + obj.dx;
      obj.y = pos.top + obj.dy;

      const W = el.outerWidth();
      const H = el.outerHeight();

      // boundaries inside parent
      if (obj.x < 0) { obj.x = 0; obj.dx *= -1; }
      if (obj.y < 0) { obj.y = 0; obj.dy *= -1; }
      if (obj.x + W > A_width) { obj.x = A_width - W; obj.dx *= -1; }
      if (obj.y + H > A_height) { obj.y = A_height - H; obj.dy *= -1; }

      // apply new position
      el.css({
        left: obj.x + "px",
        top: obj.y + "px"
      });
    });

  }

  requestAnimationFrame(wanderLoop);
}
