			let cells = document.querySelectorAll(".cell");
			let xscore = document.querySelector("#xscore");
			let oscore = document.querySelector("#oscore");
			
			let letter = "o";
			let xCounter = 0;
			let oCounter = 0;
			
			xscore.innerHTML = xCounter;
			oscore.innerHTML = oCounter;
			
			cells.forEach(function(cell){
				cell.addEventListener('click',addLetter);
			});
			function addLetter(e){
				if(e.target.innerHTML === ""){
					turn();
					e.target.innerHTML = letter;
					let winner = checkVictory();
					//console.log(checkDraw());
	
					if(winner){
						//alert(`Player ${winner.victory} wins!`);
						victoryCounter(winner.victory);
						
						cells.forEach(function(cell){
							cell.removeEventListener('click',addLetter);
						});
					}else{
						let draw = checkDraw().every(function(draw){
							return draw === true;
						});
						
						if(draw){
							alert("Draw!");
						}
						
					}
				}else{
				//console.log("it's already full");
					e.target.style.cursor = "not-allowed";
				}
				
			}
			function turn(){
				letter === "o" ? letter = "x" : letter = "o";
			}
			
			function checkVictory(){
				let c1 = document.querySelector("#c1");
				let c2 = document.querySelector("#c2");
				let c3 = document.querySelector("#c3");
				let c4 = document.querySelector("#c4");
				let c5 = document.querySelector("#c5");
				let c6 = document.querySelector("#c6");
				let c7 = document.querySelector("#c7");
				let c8 = document.querySelector("#c8");
				let c9 = document.querySelector("#c9");
				
				/*check horizontal*/
				if(c1.innerHTML !== "" && c2.innerHTML !== "" && c3.innerHTML !== ""){
					if(c1.innerHTML === c2.innerHTML && c2.innerHTML === c3.innerHTML){
						c1.classList.add("highlight"+c1.innerHTML);
						c2.classList.add("highlight"+c1.innerHTML);
						c3.classList.add("highlight"+c1.innerHTML);
						return {victory: c1.innerHTML};
					}
				}
				if(c4.innerHTML !== "" && c5.innerHTML !== "" && c6.innerHTML !== ""){
					if(c4.innerHTML === c5.innerHTML && c5.innerHTML === c6.innerHTML){
						c4.classList.add("highlight"+c4.innerHTML);
						c5.classList.add("highlight"+c4.innerHTML);
						c6.classList.add("highlight"+c4.innerHTML);
						return {victory: c4.innerHTML};
					}
				}
				if(c7.innerHTML !== "" && c8.innerHTML !== "" && c9.innerHTML !== ""){
					if(c7.innerHTML === c8.innerHTML && c8.innerHTML === c9.innerHTML){
						c7.classList.add("highlight"+c7.innerHTML);
						c8.classList.add("highlight"+c7.innerHTML);
						c9.classList.add("highlight"+c7.innerHTML);
						return {victory: c7.innerHTML};
					}
				}
				/*end horizontal*/
				/*check diagonal*/
				if(c1.innerHTML !== "" && c5.innerHTML !== "" && c9.innerHTML !== ""){
					if(c1.innerHTML === c5.innerHTML && c5.innerHTML === c9.innerHTML){
						c1.classList.add("highlight"+c1.innerHTML);
						c5.classList.add("highlight"+c1.innerHTML);
						c9.classList.add("highlight"+c1.innerHTML);
						return {victory: c1.innerHTML};
					}
				}
				if(c3.innerHTML !== "" && c5.innerHTML !== "" && c7.innerHTML !== ""){
					if(c3.innerHTML === c5.innerHTML && c5.innerHTML === c7.innerHTML){
						c3.classList.add("highlight"+c3.innerHTML);
						c5.classList.add("highlight"+c3.innerHTML);
						c7.classList.add("highlight"+c3.innerHTML);
						return {victory: c3.innerHTML};
					}
				}
				/*end diagonal*/
				/*check vertical*/
				if(c1.innerHTML !== "" && c4.innerHTML !== "" && c7.innerHTML !== ""){
					if(c1.innerHTML === c4.innerHTML && c4.innerHTML === c7.innerHTML){
						c1.classList.add("highlight"+c1.innerHTML);
						c4.classList.add("highlight"+c1.innerHTML);
						c7.classList.add("highlight"+c1.innerHTML);
						return {victory: c1.innerHTML};
					}
				}
				if(c2.innerHTML !== "" && c5.innerHTML !== "" && c8.innerHTML !== ""){
					if(c2.innerHTML === c5.innerHTML && c5.innerHTML === c8.innerHTML){
						c2.classList.add("highlight"+c2.innerHTML);
						c5.classList.add("highlight"+c2.innerHTML);
						c8.classList.add("highlight"+c2.innerHTML);
						return {victory: c2.innerHTML};
					}
				}
					
				if(c3.innerHTML !== "" && c6.innerHTML !== "" && c9.innerHTML !== ""){
					if(c3.innerHTML === c6.innerHTML && c6.innerHTML === c9.innerHTML){
						c3.classList.add("highlight"+c3.innerHTML);
						c6.classList.add("highlight"+c3.innerHTML);
						c9.classList.add("highlight"+c3.innerHTML);
						return {victory: c3.innerHTML};
					}
				}
					
				/*end vertical*/
			}
			
			function checkDraw(){
				let array = [];
				
				cells.forEach(function(cell,i){
					
					if(cell.innerHTML === ""){
						array[i] = false;
					}else{
						array[i] = true;
					}
				});
				
				return array;
			}
			
			document.querySelector("button").addEventListener('click',cleanCells);
			function cleanCells(){
				let letters = ["x","o"];
				cells.forEach(function(cell,i){
					cell.innerHTML = "";
					
					letters.forEach(function(letter){
						cell.classList.remove("highlight"+letter);
					});
					
					letter = "o";
					cell.addEventListener('click',addLetter);
				});
			}
			function victoryCounter(winner){
				if(winner === "x"){
					xCounter++;
					xscore.innerHTML = xCounter;
				}else{
					oCounter++;
					oscore.innerHTML = oCounter;
				}
			}