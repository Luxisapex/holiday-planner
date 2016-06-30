document.getElementById("button").onclick = function () {
	var tableBody = document.getElementById('table-body');

	var row = document.createElement('tr');
	
	var name = document.createElement('td');
	name.innerHTML = document.getElementById("name").value;
	row.appendChild(name);
	
	var startDate = document.createElement('td');
	startDate.innerHTML = document.getElementById("start-date").value;
	row.appendChild(startDate);
	
	var endDate = document.createElement('td');
	endDate.innerHTML = document.getElementById("end-date").value;
	row.appendChild(endDate);
	
	tableBody.appendChild(row);
}