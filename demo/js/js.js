(function () {
	//
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	function $(id) {
		return document.getElementById(id);
	}
	function show(element) {
		return element.style.display = 'block';
	}
	function hide(element) {
		return element.style.display = 'none';
	}
	//
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	function MyGame() {
	}
	//
	MyGame.prototype = {
		currentPlayer: 'O',
		nextTurn: function() {
			switch(this.currentPlayer) {
				case 'O':
					this.currentPlayer = 'X';
					break;
				case 'X':
					this.currentPlayer = 'O';
					break;
			}
		},
		checkGameOver: function() {

			// todo: check if is really game over!!!

			return false;
		}
	};
	//
	var myGame = new MyGame();
	//
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	function userClick(evt) {
		//
		// console.log('userClick('+evt+')');
		//
		var cell = evt.target;
		var currentClass = cell.getAttribute('class');
		//
		switch(currentClass) {
			case '':
				cell.setAttribute('class', myGame.currentPlayer);
				//
				var opponentMeter = $('lif_red_'+(myGame.currentPlayer == 'X' ? 'O' : 'X'));
				var currentWidth = opponentMeter.style.width ? (opponentMeter.style.width).replace(/px/ , '') : 0;
				var newWidth = new Number(currentWidth) + 40;
				opponentMeter.style.width = newWidth + 'px';
				//
			    var sound = $('punch_' + Math.round(Math.random()+1));
    			sound.play();    
				//
				var isGameOver = myGame.checkGameOver();
				if ( isGameOver ) {
					gameOver();
				} else {
					myGame.nextTurn();
				}
				break;
			case 'O':
				// cell.setAttribute('class', 'X');
				break;
			case 'X':
				// cell.setAttribute('class', '');
				break;
		} 
	}
	//
	function init() {
		//
		// console.log('init()');
		//
		var board = $('main_board');
		var hor = board.rows[0].cells.length;
		var ver = board.rows.length;
		//
		for ( var j = 0 ; j < ver ; j++ ) {
			for ( var i = 0 ; i < hor ; i++ ) {
				var cell = board.rows[i].cells[j];
				cell.addEventListener('click', userClick, false);
				//
				cell.setAttribute('data-x', i);
				cell.setAttribute('data-y', j);
			}
		}
		//
		hide($('main_message'));
		show($('main_board'));
		//
		setInterval(
			function() {
				var counter = $('main_counter');
				var count = new Number(counter.innerHTML);
				if ( count > 0 ) {
					count--;
					counter.innerHTML = count;
				} else {
					// todo: stop loop
				}
			}, 1000
		);
	}
	//
	function checkGameOver() {
		//
		console.log('checkGameOver()');
		//
		var isGameOver = myGame.checkGameOver();
		if ( isGameOver ) {
			// todo: update UI
		}
		return isGameOver;
	}
	//
	window.onload = init;
	//
})();