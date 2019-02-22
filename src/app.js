const renderMessage = (button) => {
	let div = document.querySelector('.message')
	div.innerHTML = `<p>Your choice was ${button}</p>`
}


document.addEventListener('DOMContentLoaded', () => {
	const rock = document.querySelector('.rock')
	const paper = document.querySelector('.paper')
	const scissors = document.querySelector('.scissors')

	rock.addEventListener('click',event => {
		renderMessage("Rock")
	})
	paper.addEventListener('click',event => {
		renderMessage("Paper")
	})
	scissors.addEventListener('click',event => {
		renderMessage("Scissors")
	})

})


// function rps(a, b) {
// 	if (a === b){
// 		return "tie";
//     }

//     return false;

// 	if ((a === "rock" && b === "scissors;") ||
// 	(a === "paper" && b === "rock") ||
// 	(a === "scissors" && b === "paper")) {
// 		return "a";
// 	}

// 	return "b";

// };