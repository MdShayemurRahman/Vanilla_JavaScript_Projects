const colors = ["green", "red", "yellow", "blue", "violet", "indigo", "orange"];


document.getElementById('btn').addEventListener('click', function(){

    var randomNumber = Math.floor(Math.random()*colors.length);
    
    // console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];

    document.querySelector('.color').textContent = colors[randomNumber];

})