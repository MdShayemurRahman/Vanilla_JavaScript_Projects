const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const notification = document.getElementById('notification-container');

const figureParts = document.querySelectorAll('.figure-part');

const data = ['wizard', 'money', 'hidden'];

// 'programming', 'science', 'computer', 'software', 'application', 'engineering', 'interface', 

let selectedWord = data[Math.floor(Math.random() * data.length)];

let currectLetter = []; 
let wrongLetter = []; 

function displayWord() {
    wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(
                letter => `
                <span class="letter">
                    ${currectLetter.includes(letter) ? letter : ''}
                </span>
            `
            )
            .join('')
        }
    `;
    const innerWord = wordEl.innerText.replace(/\n/g, '');
    
    if(innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulation, You Won :)'
        popup.style.display = 'flex';
    }
}

//* update wrong letter
function updateWrongLetter() {
    //Display wrong letter
    wrongLetterEl.innerHTML = `
        ${wrongLetter.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetter.map(letter => `<span>${letter}</span>`)}
    `;

    figureParts.forEach((part, index) => {
        if(index < wrongLetter.length) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    })

    if(wrongLetter.length === figureParts.length) {
        finalMessage.innerText = 'Unfortunately, You Are Lost :(';
        popup.style.display = 'flex';
    }
}

//* show notification for already pressed key
function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

window.addEventListener('keydown', e =>  {
    // console.log(e.key, e.keyCode);
    let letter = e.key;
    if(e.keyCode > 65 && e.keyCode <=90) {
        if(selectedWord.includes(letter)) {
            if(!currectLetter.includes(letter)) {
                currectLetter.push(letter);

                displayWord();
            } else {
                showNotification();
            }
        } else {
            if(!wrongLetter.includes(letter)) {
                wrongLetter.push(letter);
                updateWrongLetter();
            } else {
                // if wrong letter is pressed more than once notification should be shown
                showNotification(); 
            }
        }
    }
})

//* Restart the game
playAgainBtn.addEventListener('click', () => {
    currectLetter = [];
    wrongLetter = [];

    selectedWord = data[Math.floor(Math.random() * data.length)];

    displayWord();
    updateWrongLetter();

    popup.style.display = 'none';
    
})

displayWord();