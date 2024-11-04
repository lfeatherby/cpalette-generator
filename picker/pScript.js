const app = document.getElementById('root');
const ind = document.getElementById('ind');
var c = document.createElement('img');
var single = document.getElementById('single');
var colorPickerI = new iro.ColorPicker('#pickerI');
var currentColour = '';
let b1 = document.getElementById("box1");
let c1 = '';
let lbl1 = document.getElementById("lbl1");

$(document).ready(function () {
  $("#resetALL").click(function () {
    $(":text").val("");
  });
  $("#hex1").on("input", function () {
    c1 = $(this).val().replace("#", "");
    pickerS.color.hexString = "#" + c1;
    b1.style.backgroundColor = "#" + c1;
    lbl1.textContent = "#" + c1;
  });
  $("#offButton").on("click", function () {
    b1.style.backgroundColor = c1;
    var o = $("#overlay");
    o[0].style.display = "none";
    submit();
  });

});

colorPickerI.on(['input:end'], function (color) {
  // log the current color as a HEX string
  c1 = color.hexString.slice(1);
  single.innerHTML = "";
  lbl1.textContent = color.hexString;
  b1.style.backgroundColor = color.hexString;
});
function myDisplayFunction(myObj) {
  //console.log(data.count);
  var l = document.createElement("p");
  l.textContent = myObj.hex["value"].toLowerCase();
  l.classList.add("lbl");
  l.style.color = myObj.contrast["value"];
  var d = document.createElement("div");
  d.appendChild(l);
  d.classList.add("sq");
  d.style.backgroundColor = myObj.hex["value"];
  single.appendChild(d);
  lbl1.style.color = myObj.contrast["value"];
}
function submit() {
  // Create a request variable and assign a new XMLHttpRequest object to it.
  single.innerHTML = "";
  let s = document.createElement("script");
  s.src =
    "https://www.thecolorapi.com/id?hex=" +
    c1 +
    "&format=jsonp&callback=myDisplayFunction";
  document.body.appendChild(s);

}

function on() {
  single.innerHTML = '';
  document.getElementById("overlay").style.display = "block";
}

function reset() {
  single.innerHTML = ''
}