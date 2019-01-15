function toGallons(liters) {
  return liters / 3.785;
};

function cupsToTsp(cups) {
  return cups * 48;
}

var liters = parseFloat(prompt("How many liters?"));

alert(liters + " liters" + " is " + toGallons(liters) + " gallons");
