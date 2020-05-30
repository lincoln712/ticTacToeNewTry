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
				let c1 = document.querySelector("#c1").innerHTML;
				let c2 = document.querySelector("#c2").innerHTML;
				let c3 = document.querySelector("#c3").innerHTML;
				let c4 = document.querySelector("#c4").innerHTML;
				let c5 = document.querySelector("#c5").innerHTML;
				let c6 = document.querySelector("#c6").innerHTML;
				let c7 = document.querySelector("#c7").innerHTML;
				let c8 = document.querySelector("#c8").innerHTML;
				let c9 = document.querySelector("#c9").innerHTML;
				
				/*check horizontal*/
				if(c1 !== "" && c2 !== "" && c3 !== ""){
					if(c1 === c2 && c2 === c3){
						return {victory: c1};
					}
				}
				if(c4 !== "" && c5 !== "" && c6 !== ""){
					if(c4 === c5 && c5 === c6){
						return {victory: c4};
					}
				}
				if(c7 !== "" && c8 !== "" && c9 !== ""){
					if(c7 === c8 && c8 === c9){
						return {victory: c7};
					}
				}
				/*end horizontal*/
				/*check diagonal*/
				if(c1 !== "" && c5 !== "" && c9 !== ""){
					if(c1 === c5 && c5 === c9){
						return {victory: c1};
					}
				}
				if(c3 !== "" && c5 !== "" && c7 !== ""){
					if(c3 === c5 && c5 === c7){
						return {victory: c3};
					}
				}
				/*end diagonal*/
				/*check vertical*/
				if(c1 !== "" && c4 !== "" && c7 !== ""){
					if(c1 === c4 && c4 === c7){
						return {victory: c1};
					}
				}
				if(c2 !== "" && c5 !== "" && c8 !== ""){
					if(c2 === c5 && c5 === c8){
						return {victory: c2};
					}
				}
					
				if(c3 !== "" && c6 !== "" && c9 !== ""){
					if(c3 === c6 && c6 === c9){
						return {victory: c3};
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
				cells.forEach(function(cell){
					cell.innerHTML = "";
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