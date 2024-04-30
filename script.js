var colorChangeDiv = document.getElementById("colorChangeDiv");
var color1 = ['#ffffff57'];
var color2 = ['#333'];
var currentColorIndex = 1;

function changeColors(){
    currentColorIndex = (currentColorIndex + 1) % 2;
    var newColor = (currentColorIndex === 0) ? color1 : color2;
    colorChangeDiv.style.backgroundColor = newColor;
}