var pickerS = new iro.ColorPicker('#pickerS', {
    color: "#ff5005"
});
var pickerE = new iro.ColorPicker('#pickerE', {
    color: "#bf00ff"
});
let sel = document.getElementById('sel');
let b1 = document.getElementById('box1');
let b2 = document.getElementById('box2');
let c1 = '';
let c2 = '';
let n = 0;
$(document).ready(function () {
    $("#numSteps").on("mousedown", function () {
        multi.innerHTML = '';
    });
    $("#numSteps").on("input", function () {
        $("#stepsVal").text($(this).val());
        n = $(this).val();
    });
    $("#numSteps").on("mouseup", function () {
        n = $(this).val();
        submit();
    });
});

function on1() {
    document.getElementById("startOverlay").style.display = "block";
}

function on2() {
    document.getElementById("endOverlay").style.display = "block";
}

function off() {
    var overlays = document.getElementsByClassName("overlay");
    for (var j = 0; j < overlays.length; j++) {
        overlays[j].style.display = "none";
    }
    //let col = colour1.to("srgb");
}

pickerS.on(['input:end'], function (color) {
    // log the current color as a HEX string
    multi.innerHTML = '';
    //currentColour = color.hexString.slice(1);
    //colour1hex = color.hexString;
    b1.style.backgroundColor = color.hexString;
    c1 = color.hexString;

});

pickerE.on(['input:end'], function (color) {
    // log the current color as a HEX string
    multi.innerHTML = '';
    //currentColour = color.hexString.slice(1);
    //colour1hex = color.hexString;
    b2.style.backgroundColor = color.hexString;
    c2 = color.hexString;

});

function submit() {

    let r = Color.range(c1, c2);
    let stops = Color.steps(r, { steps: n });
    var multi = document.getElementById('multi');

    let cols = new Array(stops.length);
    for (let i = 0; i < stops.length; i++) {
        cols[i] = stops[i].toString({ format: "hex" });
    }
    for (let j = 0; j < cols.length; j++) {
        var l = document.createElement('p');
        l.textContent = cols[j];
        l.classList.add('lbl');
        var d = document.createElement('div');
        d.appendChild(l);
        d.classList.add('sq');
        d.style.backgroundColor = cols[j];
        multi.appendChild(d);
    }
}