const app = document.getElementById('root')
var multi = document.getElementById('multi')
var colorPickerS = new iro.ColorPicker('#pickerS');
var currentColour = ''
var currentMode = 'monochrome'
var currentCount = '5'

$(document).ready(function () {
  $(".s-nav button").click(function () {
    $(".s-nav button").removeClass("active");
    $(this).addClass("active");
    currentMode = $(this).text();
  });
  $(".complement").click(function () {
    $(".num-nav button").removeClass("active");
    $(".two").addClass("active");
    currentCount = $(".two").text().charAt(0);
  });
  $(".triad").click(function () {
    $(".num-nav button").removeClass("active");
    $(".three").addClass("active");
    currentCount = $(".three").text().charAt(0);
  });
  $(".quad").click(function () {
    $(".num-nav button").removeClass("active");
    $(".four").addClass("active");
    console.log($(".four").text().charAt(0));
    currentCount = $(".four").text().charAt(0);
  });
  $("#resetALL").click(function () {
    $(":text").val("");
  });
  $(".num-nav button").click(function () {
    $(".num-nav button").removeClass("active");
    $(this).addClass("active");
    currentCount = $(this).text().charAt(0);
  });
  $(".navbar button").click(function () {
    currentColour = colorPickerS.color.hexString.slice(1);
    submit();
  });
});

colorPickerS.on(['input:end'], function (color) {
  // log the current color as a HEX string
  var request = new XMLHttpRequest();
  currentColour = color.hexString.slice(1);
  multi.innerHTML = '';
  // Open a new connection, using the GET request on the URL endpoint
  //currentMode = document.getElementById('mode').value
  //currentCount = document.getElementById('count').value
  var full = 'https://www.thecolorapi.com/scheme?hex=' + currentColour + '&mode=' + currentMode + '&count=' + currentCount;
  console.log(full);
  request.open('GET', full, true)



  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    //console.log(data)

    for (var i = 0; i < data.count; i++) {
      //console.log(data.count);
      var pic = document.createElement('img')
      pic.src = data.colors[i].image['bare']
      multi.appendChild(pic);
    }
  }

  // Send request
  request.send()
});
function submit() {
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest()
  // var x = event.target;
  multi.innerHTML = ''
  // Open a new connection, using the GET request on the URL endpoint
  //currentMode = document.getElementById('mode').value
  //currentCount = document.getElementById('count').value
  var full = 'https://www.thecolorapi.com/scheme?hex=' + currentColour + '&mode=' + currentMode + '&count=' + currentCount;
  console.log(full);
  request.open('GET', full, true)

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    //console.log(data)

    for (var i = 0; i < data.count; i++) {
      var pic = document.createElement('img')
      pic.src = data.colors[i].image['bare']
      multi.appendChild(pic);
    }
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
  multi.innerHTML = ''
}
