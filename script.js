// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  // complete the code here

	const name = nameInput.value.trim();
	const score = scoreInput.value.trim();

	let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

	highScores.push({
		name: name,
		score: score
	});

	localStorage.setItem("highScores", JSON.stringify(highScores));

	nameInput.value = "";
	scoreInput.value = "";
	
  showScores();
}

// Show scores in div
function showScores() {
  // complete the code

	const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

	if(highScores.length === 0) {
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

	highScores.forEach((item) => {
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



