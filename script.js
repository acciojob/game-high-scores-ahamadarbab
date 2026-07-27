// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {

	const name = nameInput.value.trim();
	const score = Number(scoreInput.value);

	if(name === "" || isNaN(score)) {
		return;
	}

	let scoreList = JSON.parse(localStorage.getItem("scores")) || [];

	scoreList.push({ name, score });

	// sort score in descending order
	scoreList.sort((a, b) => b.score - a.score);

	localStorage.setItem("scores", JSON.stringify(scoreList));

	nameInput.value = "";
	scoreInput.value = "";
	
  showScores();
}

// Show scores in div
function showScores() {

	const scoreList = JSON.parse(localStorage.getItem("scores")) || [];

	if(scoreList.length === 0) {
		scores.innerHTML = "No scores yet";
		return;
	}

	let table = `
		<table border="1">
			<tr>
				<th>Name</th>
				<th>Score</th>
			</tr>
	`;

	scoreList.forEach((item) => {
		table += `
			<tr>
				<td>${item.name}</td>
				<td>${item.score}</td>
			</tr>
		`;
	});

	table += "</table>"

	scores.innerHTML = table;
}



