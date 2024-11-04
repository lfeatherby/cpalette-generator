var pickerS = new iro.ColorPicker('#pickerS', {
    color: "#ff5005"
});
var pickerE = new iro.ColorPicker('#pickerE', {
    color: "#bf00ff"
});
let sel = document.getElementById('sel');
let b1 = document.getElementById('box1');
let b2 = document.getElementById('box2');
let lbl1 = document.getElementById('lbl1');
let lbl2 = document.getElementById('lbl2');
let offS = document.getElementById('hideSOverlay');
let offE = document.getElementById('hideEOverlay');
let c1 = pickerS.color.hexString;
let c2 = pickerE.color.hexString;
let n = 5;
var multi = document.getElementById('multi');
$(document).ready(function () {
    $("#stepsVal").text($("#numSteps").val());
    $("#numSteps").on({
        mousedown: function () {
            multi.innerHTML = '';
        },
        input: function () {
            $("#stepsVal").text($(this).val());
            n = $(this).val();
        },
        mouseup: function () {
            n = $(this).val();
            submit();
        }
    });
    $("#hex1").on("input", function () {
        c1 = '#' + $(this).val().replace("#", "");
        pickerS.color.hexString = c1;
        b1.style.backgroundColor = c1;
        lbl1.style.color = getCont(c1);
        lbl1.textContent = c1;
    });
    $("#hex2").on("input", function () {
        c2 = '#' + $(this).val().replace("#", "");
        pickerE.color.hexString = c2;
        b2.style.backgroundColor = c2;
        lbl2.style.color = getCont(c2);
        lbl2.textContent = c2;
    });
    $(".offButton").on("click", function () {
        b1.style.backgroundColor = c1;
        b2.style.backgroundColor = c2;
        lbl1.style.color = getCont(c1);
        lbl2.style.color = getCont(c2);
        var overlays = $(".overlay");
        for (var j = 0; j < overlays.length; j++) {
            overlays[j].style.display = "none";
        }
        //let col = colour1.to("srgb");
        submit();
    })
});

function on1() {
    document.getElementById("startOverlay").style.display = "block";
    multi.innerHTML = '';
}

function on2() {
    document.getElementById("endOverlay").style.display = "block";
    multi.innerHTML = '';
}

pickerS.on(['input:end'], function (color) {
    // log the current color as a HEX string
    multi.innerHTML = '';
    //currentColour = color.hexString.slice(1);
    //colour1hex = color.hexString;
    b1.style.backgroundColor = color.hexString;
    c1 = color.hexString;
    lbl1.textContent = c1;
    lbl1.style.color = getCont(c1);
});

pickerE.on(['input:end'], function (color) {
    // log the current color as a HEX string
    multi.innerHTML = '';
    //currentColour = color.hexString.slice(1);
    //colour1hex = color.hexString;
    b2.style.backgroundColor = color.hexString;
    c2 = color.hexString;
    lbl2.textContent = c2;
    lbl2.style.color = getCont(c2);
});

function submit() {

    let r = Color.range(c1, c2);
    let stops = Color.steps(r, { steps: n });


    let cols = new Array(stops.length);
    for (let i = 0; i < stops.length; i++) {
        cols[i] = stops[i].toString({ format: "hex" });
    }
    for (let j = 0; j < cols.length; j++) {
        var l = document.createElement('p');
        l.textContent = cols[j];
        l.classList.add('lbl');
        l.style.color = getCont(cols[j].slice(1));
        console.log(getCont(cols[j].slice(1)));
        var d = document.createElement('div');
        d.appendChild(l);
        d.classList.add('sq');
        d.style.backgroundColor = cols[j];
        multi.appendChild(d);
    }
}
function getCont(colour) {
    let s = document.createElement("script");
    s.src =
        "https://www.thecolorapi.com/id?hex=" +
        colour +
        "&format=jsonp&callback=myContrastFunction";
    document.body.appendChild(s);
}
function myContrastFunction(myObj) {
    console.log(myObj.contrast["value"]);
    return myObj.contrast["value"];
    //lbl1.style.color = myObj.contrast["value"];
}