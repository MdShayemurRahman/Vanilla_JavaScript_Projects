const toggle = document.getElementById('toggle');
const modalContainer = document.getElementById('modal-container')
const closeBtn = document.getElementById('close');
const graphBtn = document.getElementById('graph');

closeBtn.style.backgroundColor = 'red';

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
});

graphBtn.addEventListener('click', () => {
    modalContainer.classList.add('show-modal');
});

closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show-modal');
    
})

window.addEventListener('click', (e) => {
    if(e.target == modalContainer) {
        modalContainer.classList.remove('show-modal');
    }
})

async function getTableData() {
    const res = await fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature");
    const data = await res.json();
    
    // showTableData();
}

// function showTableData(data = providedData) {
//     // console.log(providedData);
// }

getTableData();