var colorPicker1 = new iro.ColorPicker('#picker1', {
  colors: [
    'rgb(100%, 0, 0)', // pure red
    'rgb(0, 100%, 0)', // pure green
    'rgb(0, 0, 100%)', // pure blue
  ]
});

colorPicker1.on('color:change', function(color) {
  var hex1 = colorPicker1.colors[0].hexString;
  // log the current color as a HEX string
  document.getElementById("hex1").innerHTML = hex1;

  var hex2 = colorPicker1.colors[1].hexString;
  // log the current color as a HEX string
  document.getElementById("hex2").innerHTML = hex2;

  var hex3 = colorPicker1.colors[2].hexString;
  // log the current color as a HEX string
  document.getElementById("hex3").innerHTML = hex3;
});
