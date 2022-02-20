const toggle = document.getElementById("toggle");
const modalContainer = document.getElementById("modal-container");
const closeBtn = document.getElementById("close");
const graphBtn = document.getElementById("graph");
const selectOption = document.getElementById("select-option");
const table = document.getElementById("table");

// closeBtn.style.backgroundColor = "red";



toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

graphBtn.addEventListener("click", () => {
  modalContainer.classList.add("show-modal");
});

closeBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show-modal");
});

window.addEventListener("click", (e) => {
  if (e.target == modalContainer) {
    modalContainer.classList.remove("show-modal");
  }
});

selectOption.addEventListener("change", (e) => {
    selectedValue = e.target.value;
    getTableData(selectedValue);
});


async function getTableData(value = "") {
  const res = await fetch("https://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/" + value);
  const data = await res.json();

  showTableAndChart(data);
  
}

function showTableAndChart(data) {
    let output = 
    `<tr>
          <th>Row</th>
          <th>Date</th>
          <th>Time</th>
          <th>Wind_Speed</th>
    </tr>`;
  
    for (let i = 0; i < data.length; i++) {
      output += 
        `<tr class="tableRow">
              <td>${i + 1}</td>
              <td>${data[i].date_time.slice(0, 10).split("-").reverse().join("/")}</td>
              <td>${data[i].date_time.slice(11, 19)}</td>
              <td>${data[i].wind_speed}</td>
        </tr>`;
    }
    table.innerHTML = output;
    
    showChart(data);
}

function showChart(data) {
    const time = data.map((elem) => {
        return elem.date_time.slice(11,19);
    });
    const value = data.map((elem) => {
        return elem.wind_speed;
    });
    document.querySelector("#chartReport").innerHTML = '<canvas id="chart"></canvas>';
    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: time,
            datasets: [{
                label: 'Wind_Speed',
                data: value,
                backgroundColor: ['rgba(8, 207, 91, 0.6)', 'red', 'green', 'yellow', 'violet', 'blue', '#30336b', 'Purple', 'Orange'],
                borderColor: 'grey',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function searchInput() {
    const input = document.getElementById("search");
	const filter = input.value.toUpperCase();
	const tr = table.getElementsByTagName("tr");

	let td, i, txtValue;
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[3];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

getTableData();


