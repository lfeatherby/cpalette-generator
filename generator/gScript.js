const app = document.getElementById("root");
var multi = document.getElementById("multi");
var pickerS = new iro.ColorPicker("#pickerS");
var currentColour = "";
var currentMode = "monochrome";
var currentCount = "5";
let b1 = document.getElementById("box1");
let lbl1 = document.getElementById("lbl1");
let c1 = pickerS.color.hexString;

$(document).ready(function () {
  $(".s-nav button").click(function () {
    $(".s-nav button").removeClass("active");
    $(this).addClass("active");
    currentMode = $(this).text();
  });
  $(".complement").click(function () {
    $(".num-nav button").removeClass("active");
    $(".two").addClass("active");
    currentCount = "2";
    currentMode = "complement";
  });
  $(".triad").click(function () {
    $(".num-nav button").removeClass("active");
    $(".three").addClass("active");
    currentCount = "3";
  });
  $(".quad").click(function () {
    $(".num-nav button").removeClass("active");
    $(".four").addClass("active");
    console.log($(".four").text().charAt(0));
    currentCount = "4";
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
    currentColour = pickerS.color.hexString.slice(1);
    submit();
  });
  $("#hex1").on("input", function () {
    c1 = $(this).val().replace("#", "");
    pickerS.color.hexString = "#" + c1;
    b1.style.backgroundColor = "#" + c1;
    lbl1.textContent = "#" + c1;
  });
  $("#offButton").on("click", function () {
    b1.style.backgroundColor = c1;
    var o = $(".overlay");
    o[0].style.display = "none";
    submit();
  });
});

function myDisplayFunction(myObj) {
  for (var i = 0; i < myObj.count; i++) {
    //console.log(data.count);
    var l = document.createElement("p");
    l.textContent = myObj.colors[i].hex["value"].toLowerCase();
    l.style.color = myObj.colors[i].contrast["value"];
    l.classList.add("lbl");
    var d = document.createElement("div");
    d.appendChild(l);
    d.classList.add("sq");
    d.style.backgroundColor = myObj.colors[i].hex["value"];
    multi.appendChild(d);
    //lbl1.style.color = myObj.contrast["value"];
  }
}
pickerS.on(["input:end"], function (color) {
  // log the current color as a HEX string
  c1 = color.hexString.slice(1);
  multi.innerHTML = "";
  lbl1.textContent = color.hexString;
  b1.style.backgroundColor = color.hexString;
  // Open a new connection, using the GET request on the URL endpoint
  //currentMode = document.getElementById('mode').value
  //currentCount = document.getElementById('count').value
});
function submit() {
  multi.innerHTML = "";
  let s = document.createElement("script");
  s.src =
    "https://www.thecolorapi.com/scheme?hex=" +
    c1 +
    "&format=jsonp&mode=" +
    currentMode +
    "&count=" +
    currentCount +
    "&callback=myDisplayFunction";
  document.body.appendChild(s);
}

function on() {
  document.getElementById("overlay").style.display = "block";
  multi.innerHTML = "";
}

function reset() {
  multi.innerHTML = "";
}
