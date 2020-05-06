// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {
    var text = '';
    const table = document.getElementById('pixelCanvas');
    for(var i=0;i<height;i++){
        text += '<tr>';
        for(var j=0;j<width;j++){
            text += '<td class=cell></td>';
        }
        text += "</tr>";
    }
    table.innerHTML = text;
    addcolor();
}

function tablesubmission(){
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height,width);
}

function addcolor(){
    const color = document.getElementById('colorPicker');
    const cells = document.getElementsByClassName('cell');
    for(var i=0;i<cells.length;i++){
        cells[i].addEventListener('click',function(event){
            let clicked = event.target;
            clicked.style.backgroundColor = color.value;
        })
    }
}

document.getElementById('sizePicker').onsubmit = function(){
    tablesubmission();
}

makeGrid(10,10);