(function () {
	//
	function $(id) {
		return document.getElementById(id);
	}
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
				cell.setAttribute('class', 'O');
				break;
			case 'O':
				cell.setAttribute('class', 'X');
				break;
			case 'X':
				cell.setAttribute('class', '');
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

			}
		}
	}
	//
	window.onload = init;
	//
})();