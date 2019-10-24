// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Your code goes here!
    var table = document.getElementById('pixelCanvas');
    table.innerHTML = "";
    var Height = document.getElementById('inputHeight').value;
    var Width = document.getElementById('inputWidth').value;
    var tabledata = '';
    for (var i = 0; i < Height; i++) {
        tabledata += '<tr>';
        for (var x = 0; x < Width; x++) {
            tabledata += '<td></td>';
        }
        tabledata += '</tr>';
    }
    table.innerHTML = tabledata;
    AddEventForTD();
}

function AddEventForTD() {
    var tds = document.getElementsByTagName('td');
    for (var i = 0; i < tds.length; i++) {
        tds[i].addEventListener("click", function (event) {
            var currenttd = event.target;
            currenttd.style.backgroundColor = document.getElementById('colorPicker').value;
        })
    }
}
document.addEventListener('DOMContentLoaded', function () {
    AddEventForTD();

})
