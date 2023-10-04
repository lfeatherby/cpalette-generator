const app = document.getElementById('root')
const ind = document.getElementById('ind')
var c = document.createElement('img')
var single = document.getElementById('single')
var colorPickerI = new iro.ColorPicker('#pickerI');
var currentColour = ''

$(document).ready(function () {
  $("#resetALL").click(function () {
    $(":text").val("");
  });
});

colorPickerI.on(['input:end'], function (color) {
  // log the current color as a HEX string
  currentColour = color.hexString.slice(1)
  var request = new XMLHttpRequest()
  var full = 'https://www.thecolorapi.com/id?hex=' + currentColour //document.getElementById('colour').value

  // Open a new connection, using the GET request on the URL endpoint

  console.log(full);
  request.open('GET', full, true)

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    console.log(data)
    c.src = data.image['bare']
    single.appendChild(c);
  }

  // Send request
  request.send()
});

function submit(event) {
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest()
  var x = event.target;
  currentColour = document.getElementById('colour').value
  var full = 'https://www.thecolorapi.com/id?hex=' + currentColour //document.getElementById('colour').value

  // Open a new connection, using the GET request on the URL endpoint

  console.log(full);
  request.open('GET', full, true)

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    console.log(data)
    c.src = data.image['bare']
    single.appendChild(c);
  }

  // Send request
  request.send()

}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function reset() {
  single.innerHTML = ''
}