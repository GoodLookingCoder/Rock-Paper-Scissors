window.onload = init;

function init(){
	var playButton = document.getElementById("play")
	play.onclick = handlePlayClick;
}

function handlePlayClick(){
	var bodyArray = document.getElementsByTagName("body");
	var body = bodyArray[0];
	
	var firstSection = document.getElementById("initial-section");

if (firstSection.getAttribute("class") !== "animame1") {
	firstSection.setAttribute("class", "animame1");

	setTimeout(function(){firstSection.remove()}, 1000);
	
	var secondSection = document.createElement("section");
	secondSection.setAttribute("class", "apear");

	var secondH1 = document.createElement("h1");
	secondH1.setAttribute("class", "secondH1")
	
	var imgsContainer = document.createElement("div");
	imgsContainer.setAttribute("class", "images-container");
	
	var img1 = document.createElement("img");
	img1.setAttribute("src", "IMG/rock.png");
	img1.id = "img1";

	var img2 = document.createElement("img");
	img2.setAttribute("src", "IMG/rock.png");


	var buttonsContainer = document.createElement("div");
	buttonsContainer.setAttribute("class", "buttons-container");

	var rockButton = document.createElement("button");
	rockButton.innerHTML = "Rock";

	var paperButton = document.createElement("button");
	paperButton.id = "paperButton";
	paperButton.innerHTML = "Paper";

	var scissorsButton = document.createElement("button");
	scissorsButton.innerHTML = "Scissors";




	imgsContainer.appendChild(img1);
	imgsContainer.appendChild(img2);

	buttonsContainer.appendChild(rockButton);
	buttonsContainer.appendChild(paperButton);
	buttonsContainer.appendChild(scissorsButton);

	secondH1.innerHTML = "Choose an Option";
	
	secondSection.appendChild(secondH1);
	secondSection.appendChild(imgsContainer);
	secondSection.appendChild(buttonsContainer);

	
	setTimeout(function(){body.appendChild(secondSection)}, 1000);
	


	rockButton.onclick = handleRockButton;
	paperButton.onclick = handlePaperButton;
	scissorsButton.onclick = handleScissorsButton;

	function handleRockButton(){
		if (img1.getAttribute("class") !== "goAnimation") {
			var value = "rock";

			img1.setAttribute("src", "IMG/rock.png");		
			
			img1.setAttribute("class","goAnimation");
			setTimeout(change, 875);

			function change(){	
				img1.setAttribute("class", "delete");
				
			}

			computerPlays(value);
		}
	}

	function handlePaperButton(){
		if (img1.getAttribute("class") !== "goAnimation") {
			var value = "paper"

			img1.src="IMG/rock.png"
			img1.setAttribute("class", "goAnimation")
			setTimeout(change, 875);

			function change(){
				img1.src = "IMG/paper.png"
				img1.setAttribute("class", "delete")
			}

			computerPlays(value);
		}
	}

	function handleScissorsButton(){
		if (img1.getAttribute("class") !== "goAnimation") {
			var value = "scissors";

			img1.src = "IMG/rock.png"
			img1.setAttribute("class", "goAnimation");
			setTimeout(change, 875);

			function change(){
			  	img1.setAttribute("src", "IMG/scissors.png")
			  	img1.setAttribute("class","delete")	
			}

			computerPlays(value);
		}
	}	

	

	var computer = 0;
	var player = 0;

	function computerPlays(value){
		var playerCounter = document.getElementById("playerCounter")
		var computerCounter = document.getElementById("computerCounter")

		var random = Math.floor(Math.random() * 3);
		var play = random;
		
		if (play === 0) {
			img2.setAttribute("src", "IMG/rock.png");	

			img2.setAttribute("class","goAnimation")
			setTimeout(change, 875);

			function change(){
				img2.setAttribute("class", "delete")
				
				if (value === "paper") {
					secondH1.innerHTML = "Player Wins";
					player++;
				}else if (value === "rock") {
					secondH1.innerHTML = "Draw";
				}else{
					secondH1.innerHTML = "Computer Wins";
					computer++;
				}
				playerCounter.innerHTML = player;
				computerCounter.innerHTML = computer;

				if (player === 3){
					secondH1.innerHTML = "Player has win the Game";
					rockButton.setAttribute("class", "esfumasion");
					scissorsButton.setAttribute("class", "esfumasion");
					paperButton.setAttribute("class", "esfumasion");

					var playAgain = document.createElement("button");
					playAgain.innerHTML = "Play Again";
					buttonsContainer.appendChild(playAgain);

					playAgain.onclick = function(){
						playAgain.remove();
						setTimeout(function(){
							rockButton.setAttribute("class", "desfumasion");
							scissorsButton.setAttribute("class", "desfumasion");
							paperButton.setAttribute("class", "desfumasion");
						}, 10);
						player = 0;
						computer = 0;	

						playerCounter.innerHTML = player;
						computerCounter.innerHTML = computer;
						secondH1.innerHTML = "Choose an Option";
						img1.setAttribute("src", "IMG/rock.png");
						img2.setAttribute("src", "IMG/rock.png");
					}

				}else if (computer === 3){
					secondH1.innerHTML = "Computer has win the Game";
					rockButton.setAttribute("class", "esfumasion");
					scissorsButton.setAttribute("class", "esfumasion");
					paperButton.setAttribute("class", "esfumasion");

					var playAgain = document.createElement("button");
					playAgain.innerHTML = "Play Again";
					buttonsContainer.appendChild(playAgain);


					playAgain.onclick = function(){
						playAgain.remove();
						setTimeout(function(){
							rockButton.setAttribute("class", "desfumasion");
							scissorsButton.setAttribute("class", "desfumasion");
							paperButton.setAttribute("class", "desfumasion");
						}, 10);						
						player = 0;
						computer = 0;	

						playerCounter.innerHTML = player;
						computerCounter.innerHTML = computer;
						secondH1.innerHTML = "Choose an Option";	
						img1.setAttribute("src", "IMG/rock.png");
						img2.setAttribute("src", "IMG/rock.png");
					}
				}
			}

		}else if (play === 1) {
			img2.setAttribute("src", "IMG/rock.png");	

			img2.setAttribute("class","goAnimation")
			setTimeout(change, 875);

			function change(){
				img2.src = "IMG/paper.png"
				img2.setAttribute("class", "delete")

				if (value === "scissors") {
					secondH1.innerHTML = "Player Wins";				
					player++;
				}else if (value === "paper") {
					secondH1.innerHTML = "Draw";
				}else{
					secondH1.innerHTML = "Computer Wins";
					computer++;
				}
				playerCounter.innerHTML = player;
				computerCounter.innerHTML = computer;

				if (player === 3){
					secondH1.innerHTML = "Player has win the Game";
					rockButton.setAttribute("class", "esfumasion");
					scissorsButton.setAttribute("class", "esfumasion");
					paperButton.setAttribute("class", "esfumasion");

					var playAgain = document.createElement("button");
					playAgain.innerHTML = "Play Again";
					buttonsContainer.appendChild(playAgain);


					playAgain.onclick = function(){
						playAgain.remove();
						setTimeout(function(){
							rockButton.setAttribute("class", "desfumasion");
							scissorsButton.setAttribute("class", "desfumasion");
							paperButton.setAttribute("class", "desfumasion");
						}, 10);						

						player = 0;
						computer = 0;	
						playerCounter.innerHTML = player;
						computerCounter.innerHTML = computer;
						secondH1.innerHTML = "Choose an Option";
						img1.setAttribute("src", "IMG/rock.png");
						img2.setAttribute("src", "IMG/rock.png");
					}
				}else if (computer === 3){
					secondH1.innerHTML = "Computer has win the Game";
					rockButton.setAttribute("class", "esfumasion");
					scissorsButton.setAttribute("class", "esfumasion");
					paperButton.setAttribute("class", "esfumasion");

					var playAgain = document.createElement("button");
					playAgain.innerHTML = "Play Again";
					buttonsContainer.appendChild(playAgain);

					playAgain.onclick = function(){
						playAgain.remove();
						setTimeout(function(){
							rockButton.setAttribute("class", "desfumasion");
							scissorsButton.setAttribute("class", "desfumasion");
							paperButton.setAttribute("class", "desfumasion");
						}, 10);						
						player = 0;
						computer = 0;	
						playerCounter.innerHTML = player;
						computerCounter.innerHTML = computer;
						secondH1.innerHTML = "Choose an Option";
						img1.setAttribute("src", "IMG/rock.png");
						img2.setAttribute("src", "IMG/rock.png");
					}
				}
			}

		}else{
	    	img2.src = "IMG/rock.png"
			img2.setAttribute("class", "goAnimation");
			setTimeout(change, 875);

			function change(){
			  	img2.setAttribute("src", "IMG/scissors.png")
			  	img2.setAttribute("class","delete")	

				if (value === "rock"){
					secondH1.innerHTML = "Player Wins";	
					player++;
				}else if (value === "scissors"){
					secondH1.innerHTML = "Draw";
				}else{
					secondH1.innerHTML = "Computer Wins";
					computer++;
				}
		
				playerCounter.innerHTML = player;
				computerCounter.innerHTML = computer;
				if (player === 3){
					secondH1.innerHTML = "Player has win the Game";
					rockButton.setAttribute("class", "esfumasion");
					scissorsButton.setAttribute("class", "esfumasion");
					paperButton.setAttribute("class", "esfumasion");

					var playAgain = document.createElement("button");
					playAgain.innerHTML = "Play Again";
					buttonsContainer.appendChild(playAgain);


					playAgain.onclick = function(){
						playAgain.remove();
						setTimeout(function(){
							rockButton.setAttribute("class", "desfumasion");
							scissorsButton.setAttribute("class", "desfumasion");
							paperButton.setAttribute("class", "desfumasion");
						}, 10);						

						player = 0;
						computer = 0;	
						playerCounter.innerHTML = player;
						computerCounter.innerHTML = computer;
						secondH1.innerHTML = "Choose an Option";
						img1.setAttribute("src", "IMG/rock.png");
						img2.setAttribute("src", "IMG/rock.png");
					}
				}else if (computer === 3){
					secondH1.innerHTML = "Computer has win the Game";
					rockButton.setAttribute("class", "esfumasion");
					scissorsButton.setAttribute("class", "esfumasion");
					paperButton.setAttribute("class", "esfumasion");

					var playAgain = document.createElement("button");
					playAgain.innerHTML = "Play Again";
					buttonsContainer.appendChild(playAgain);


					playAgain.onclick = function(){
						playAgain.remove();
						setTimeout(function(){
							rockButton.setAttribute("class", "desfumasion");
							scissorsButton.setAttribute("class", "desfumasion");
							paperButton.setAttribute("class", "desfumasion");
						}, 10);
						player = 0;
						computer = 0;						
						playerCounter.innerHTML = player;
						computerCounter.innerHTML = computer;
						secondH1.innerHTML = "Choose an Option";
						img1.setAttribute("src", "IMG/rock.png");
						img2.setAttribute("src", "IMG/rock.png");
					}
				}

			}
		}

		

	}

}

}