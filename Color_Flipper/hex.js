const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.getElementById('btn').addEventListener('click', function(){

    var hexColor = "#";

    for(var i = 0; i < 6; i++){

        hexColor += hex[randomGenerator()];

    }

    document.body.style.backgroundColor = hexColor;

    document.querySelector('.color').textContent = hexColor;
})

function randomGenerator() {

    return Math.floor(Math.random() * hex.length);

}