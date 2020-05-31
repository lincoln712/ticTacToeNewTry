let cells = document.querySelectorAll(".cell");
let table = ["","","","","","","","",""];
let letter = "o";
let scoreX = document.querySelector("#xscore");
let scoreO = document.querySelector("#oscore");
let xpoints = 0;
let opoints = 0;
scoreX.innerHTML = xpoints;
scoreO.innerHTML = opoints;

cells.forEach((cell) => cell.addEventListener('click',addLetter));

function addLetter(e){
	if(e.target.innerHTML === ""){
		turn();
		e.target.innerHTML = letter; //put the letter in that specific cell
		table[(e.target.id.replace("c","")-1)] = e.target.innerHTML;
		if(checkVictory()){
			cells.forEach((cell)=> cell.removeEventListener('click',addLetter));
			scoreCounter(checkVictory().winner);
			cells[checkVictory().first].classList.add("highlight"+checkVictory().winner);
			cells[checkVictory().second].classList.add("highlight"+checkVictory().winner);
			cells[checkVictory().third].classList.add("highlight"+checkVictory().winner);
		}
	}else{
		e.target.style.cursor = "not-allowed";
	}
}

function turn(){
	letter === "o" ? letter = "x" : letter = "o";
}

function checkHorizontal(){
	if(table[0] !== "" && table[1] !== "" && table[2] !== "") return table[0] === table[1] && table[1] === table[2] ? {winner:table[0],first:0,second:1,third:2} : "";
	if(table[3] !== "" && table[4] !== "" && table[5] !== "") return table[3] === table[4] && table[4] === table[5] ? {winner:table[3],first:3,second:4,third:5} : "";
	if(table[6] !== "" && table[7] !== "" && table[8] !== "") return table[6] === table[7] && table[7] === table[8] ? {winner:table[6],first:6, second:7,third:8} : "";
}

function checkVertical(){
	if(table[0] !== "" && table[3] !== "" && table[6] !== "") return table[0] === table[3] && table[3] === table[6] ? {winner:table[0],first:0,second:3,third:6} : "";
	if(table[1] !== "" && table[4] !== "" && table[7] !== "") return table[1] === table[4] && table[4] === table[7] ? {winner:table[1],first:1,second:4,third:7} : "";
	if(table[2] !== "" && table[5] !== "" && table[8] !== "") return table[2] === table[5] && table[5] === table[8] ? {winner:table[2],first:2,second:5,third:8} : "";
}

function checkDiagonal(){
	if(table[0] !== "" && table[4] !== "" && table[8] !== "") return table[0] === table[4] && table[4] === table[8] ? {winner:table[0],first:0,second:4,third:8} : "";
	if(table[2] !== "" && table[4] !== "" && table[6] !== "") return table[2] === table[4] && table[4] === table[6] ? {winner:table[2],first:2,second:4,third:6} : "";
}

function checkVictory(){
	
	if(checkHorizontal()) return checkHorizontal();
	if(checkVertical()) return checkVertical();
	if(checkDiagonal()) return checkDiagonal();
}

function scoreCounter(winner){
	if(winner === "x"){
		xpoints++;
		scoreX.innerHTML = xpoints;
	}else{
		opoints++;
		scoreO.innerHTML = opoints;
	}
}

function cleanCells(){
	let xo = ["x","o"];
	cells.forEach((cell,i)=> {
		table[i] = ""; 
		cell.innerHTML = "";
		cell.className.includes("highlightx") ? cell.classList.remove("highlightx") : cell.classList.remove("highlighto"); //check if exists that class name inside the class list, if it does, then remove it
		cell.addEventListener('click',addLetter);
	});
	letter = "o";
}
document.querySelector("button").addEventListener('click',cleanCells);