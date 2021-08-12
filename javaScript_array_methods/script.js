const main = document.getElementById('main');
const addUser = document.getElementById('add-user');
const doubleMoney = document.getElementById('double-money');
const showMillionaire = document.getElementById('filter');
const sortMillionaire = document.getElementById('sort');
const calculateWealth = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//* fetch random user and get random wealth.
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user  = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }

    addData(newUser);
    
}

function double() {
    data = data.map(user => {
        return { ...user, money: user.money * 2 }
    });

    updateDom();
}


function addData(obj) {
    data.push(obj);

    updateDom();
}

function showByMillionare() {
    data = data.filter(item => {
        return item.money > 1000000;
    })
    updateDom();
}

function sortByMillionare() {
    data.sort(function (first, second) {
        return second.money - first.money;
    });
    updateDom();
}

function calculateEntireWealth(){
    const wealth = data.reduce((acc, user) => (acc += user.money), 0)
    
    const totalElement = document.createElement('div');
    totalElement.innerHTML = `<h3>Total Money: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(totalElement);
}

function updateDom(providedData = data) {
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    })
}

function  formatMoney(number) {
    return '$' + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}


addUser.addEventListener('click', getRandomUser); // Add User
doubleMoney.addEventListener('click', double);
sortMillionaire.addEventListener('click', sortByMillionare);
showMillionaire.addEventListener('click', showByMillionare);
calculateWealth.addEventListener('click', calculateEntireWealth);
