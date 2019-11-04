window.onload = function () {
let vsComp = false;
//**********Game Start Up Screen*******//
$('#board').hide();
$('#start').show();
$('.button').on('click', function(){
    $('#start').hide();
    $('#board').show();
});
	$('#finish').hide();
	$('#player1').addClass('active');

//**********Winning Combos Arrary*******//
 const  winningCombo = [
  [1,2,3], // top row
  [4,5,6], // middle row
  [7,8,9], // bottom row
  [1,4,7], // first column
  [2,5,8], // second column
  [3,6,9], // last column
  [1,5,9], // last column
  [3,6,9], // diagonal 1
  [3,5,7]  // dia
];


//**********Player/ Total Moves Arrary*******//
const player1Moves = []; //stores player 1 moves
const player2Moves = []; //stores player 2 moves
const totalMoves = [];//stores all moves made on board

//**********Variables***********//
const boxArea = document.querySelector('.boxes'); //Selects all 9 boxes
const newGame = document.querySelector('.newgame');

//On click pushes moves to appropriate array//
boxArea.addEventListener('click', function(e) {

   if (e.target.tagName === 'LI'){
		if (player1.className === 'players active'){
			player1Moves.push(e.target.value);
			totalMoves.push(e.target.value);
		} else if (player2.className === 'players active'){
			player2Moves.push(e.target.value);
			totalMoves.push(e.target.value);
		}
    }
});

//On click resets game//
 $('#newgame').on('click', function(){

    $('.box').removeClass('box-filled-1 box-filled-2')
	player1Moves.length = 0;
	player2Moves.length = 0;
	totalMoves.length = 0;
	$('#start').hide();
    $('#board').show();
	$('#finish').hide();
	$('#player1').addClass('active');
	$('#player2').removeClass('active');
	$('#finish').removeClass('screen-win-one');
	$('#finish').removeClass('screen-win-two');
});

//Checks if Player One has a winning Combo
boxArea.onclick = (e) => {
const resultplayer1 = winningCombo.some(function(ar) {
  	return ar.every(function(e) {
    return player1Moves.indexOf(e) != -1
  })
});

//Checks if Player Two has a winning Comboe
const resultplayer2 = winningCombo.some(function(ar) {
  	return ar.every(function(e) {
    return player2Moves.indexOf(e) != -1
  })
});

	//Winning & Tie if statments//
	if (resultplayer1 === true){
		const player1Name = $(".player1").val();
	 	$('#finish').show();
		$('#finish').addClass('screen-win-one');
		$('.message').html('Wins!');

	} else if (resultplayer2 === true){
		const player2Name = $(".player2").val();
	 	$('#finish').show();
		$('#finish').addClass('screen-win-two');
		$('.message').html('Wins!');
	} else if (resultplayer1 === false && resultplayer2 === false && totalMoves.length === 9){
		$('#finish').show();
		$('.message').html('Tie Game');
		$('#finish').addClass('screen-win-tie');
	}
	//Players turn statments//
	if (player1.className === 'players active') {
		$(e.target).addClass('box-filled-1');
		player1.className = 'players';
		player2.className = 'players active';
	} else if (($(e.target).hasClass('box-filled-1'))){
		e.preventDefault()
	} else if (($(e.target).hasClass('box-filled-2'))) {
		e.preventDefault()
	} else if (player2.className === 'players active') {
	$(e.target).addClass('box-filled-2');
		player2.className = 'players';
		player1.className = 'players active';
	}  else if (($(e.target).hasClass('box-filled-1'))){
		e.preventDefault()
	} else if (($(e.target).hasClass('box-filled-2'))) {
		e.preventDefault()
	}

};

//On mouse over function//
  boxArea.onmouseover = (e) => {
  //add O or X background on mouseover player 1
	  if (player1.className === 'players active') {
		  if ($(e.target).hasClass('box-filled-1')) {
		  e.target.style.backgroundImage = '';
		  } else if ($(e.target).hasClass('box-filled-2')) {
		  e.target.style.backgroundImage = '';
		  } else {
   e.target.style.backgroundImage = 'url("./img/o.svg")';
	 }
 }  //add O or X background on mouseover player 2
	  if (player2.className === 'players active') {
		  if ($(e.target).hasClass('box-filled-1')) {
		  e.target.style.backgroundImage = '';
		  } else if ($(e.target).hasClass('box-filled-2')) {
		  e.target.style.backgroundImage = '';
		  } else {
   e.target.style.backgroundImage = 'url("./img/x.svg")';
		  }
	  }
  };
  //On mouse over function//
  boxArea.onmouseout = (e) => {
  //remove O or X when mouse out
	 if (player1.className === 'players active') {
   			e.target.style.backgroundImage = '';
  	} else if (player2.className === 'players active') {
   			e.target.style.backgroundImage = '';
  		}
  	}
 }
