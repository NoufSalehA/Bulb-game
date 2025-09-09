function TheBulb() {
  let turnBulb = document.getElementById("bulb-off");
  if (turnBulb.src.match("bulb-off.png")) {
    turnBulb.src = "bulb-on.png";
  } else {
    turnBulb.src = "bulb-off.png";
  }
}
