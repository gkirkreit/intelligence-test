function checkQuestionOne(){
	var userAnswer = document.getElementById("userAnswer").value;
	var correct;

	if(userAnswer === "1218") {
		correct = true;
	} else {
		correct = false;
	}

	return correct;
}

function checkQuestionTwo(){
	var userAnswer = document.getElementById("userAnswer").value;
	var correct;

	if(userAnswer === "T") {
		correct = true;
	} else {
		correct = false;
	}

	return correct;
}

function checkQuestionThree(){
	var userAnswer = document.getElementById("userAnswer").value;
	var correct;

	if(userAnswer === "X") {
		correct = true;
	} else {
		correct = false;
	}

	return correct;
}

function checkQuestionFour(){
	var userAnswer = document.getElementById("userAnswer").value;
	var correct;

	if(userAnswer === "2") {
		correct = true;
	} else {
		correct = false;
	}

	return correct;
}