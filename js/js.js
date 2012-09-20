(function () {
	//
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//
	function $(id) {
		return document.getElementById(id);
	}
	function show(element) {
		return element.style.display = '';
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
		var mainMessage = $('main_message');
		hide(mainMessage);
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