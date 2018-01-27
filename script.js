var numArray = [
			   [[' ','X','X','X',' '],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],[' ','X','X','X',' ']],
			   [[' ',' ','X',' ',' '],[' ','X','X',' ',' '],[' ',' ','X',' ',' '],[' ',' ','X',' ',' '],[' ',' ','X',' ',' '],[' ',' ','X',' ',' '],[' ',' ','X',' ',' '],[' ','X','X','X',' ']],
			   [[' ','X','X','X',' '],['X',' ',' ',' ','X'],[' ',' ',' ',' ','X'],[' ',' ',' ','X',' '],[' ',' ','X',' ',' '],[' ','X',' ',' ',' '],['X',' ',' ',' ',' '],['X','X','X','X','X']],
			   [[' ','X','X','X',' '],['X',' ',' ',' ','X'],[' ',' ',' ',' ','X'],[' ',' ',' ','X',' '],[' ',' ',' ',' ','X'],[' ',' ',' ',' ','X'],['X',' ',' ',' ','X'],[' ','X','X','X',' ']],
			   [[' ',' ',' ','X',' '],[' ',' ','X','X',' '],[' ','X',' ','X',' '],['X',' ',' ','X',' '],['X','X','X','X','X'],[' ',' ',' ','X',' '],[' ',' ',' ','X',' '],[' ',' ','X','X','X']],
			   [['X','X','X','X',' '],['X',' ',' ',' ',' '],['X','X','X','X',' '],['X',' ',' ',' ','X'],[' ',' ',' ',' ','X'],[' ',' ',' ',' ','X'],['X',' ',' ',' ','X'],[' ','X','X','X',' ']],
			   [[' ','X','X','X',' '],['X',' ',' ',' ','X'],['X',' ',' ',' ',' '],['X','X','X','X',' '],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],[' ','X','X','X',' ']],
			   [['X','X','X','X','X'],[' ',' ',' ',' ','X'],[' ',' ',' ','X',' '],[' ',' ','X',' ',' '],[' ','X',' ',' ',' '],['X',' ',' ',' ',' '],['X',' ',' ',' ',' '],['X',' ',' ',' ',' ']],
			   [[' ','X','X','X',' '],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],[' ','X','X','X',' '],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],[' ','X','X','X',' ']],
			   [[' ','X','X','X',' '],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],['X',' ',' ',' ','X'],[' ','X','X','X','X'],[' ',' ',' ',' ','X'],['X',' ',' ',' ','X'],[' ','X','X','X',' ']],
				];

var wh = $(window).height();
$('body').css({	'margin': '0 auto',
				'background-color': 'black',
				'overflow': 'hidden'
			})

var obj = document.createElement('div');
document.body.appendChild(obj);
$(obj).css({	'height': wh * .4 + 'px',
				'width': wh * .4 + 'px',
				'margin': wh * .2 + 'px auto',
				'text-align': 'center'
			})


var obj1 = document.createElement('div');
$(obj).append(obj1);
$(obj1).css({	'height': wh * .4 + 'px',
				'width': wh * .4 + 'px'
			})
$(obj1).addClass('preserve3d');

var myArray = ['', 'rotateY(180deg)', 'rotateY(-90deg)', 'rotateY(90deg)', 'rotateX(90deg)', 'rotateX(-90deg)'];

for (var i = 0; i < myArray.length; i++) {
	var obj2 = document.createElement('div');
	$(obj1).append(obj2);
	$(obj2).css({	'height': wh * .4 + 'px',
					'width': wh * .4 + 'px',
					'margin': '0 auto',
					'position': 'absolute',
					'border': '1px solid rgba(0,255,0,0.2)',
					'transform': myArray[i] + 'translateZ(' + wh * .2 + 'px)'
				})
}

var obj3 = new Array();
var obj5 = new Array();
for (var x = 0; x < 8; x++) {
	obj3[x] = new Array();
	obj5[x] = new Array();
	for (var y = 0; y < 5; y++) {
		obj3[x][y] = document.createElement('div');
		$(obj1).append(obj3[x][y]);

		$(obj3[x][y]).addClass('preserve3d');
		$(obj3[x][y]).css({ 'height': wh * .04 + 'px',
							'width': wh * .04 + 'px',
							'display': 'inline-block',
							'position': 'absolute',
							'top': (wh * .02 + x * wh * .046) + 'px',
							'left': (wh * .092 + y * wh * .046) + 'px'
							});

		var z = wh * .3 - Math.floor(Math.random()*(wh * .6));
		obj3[x][y].style.transform = 'translateZ(' + z + 'px)';

		for (var i = 0; i < myArray.length; i++) {
			var obj4 = document.createElement('div');
			$(obj3[x][y]).append(obj4);
			$(obj4).css({ 	'height': wh * .04 + 'px',
							'width': wh * .04 + 'px',
							'margin': '0 auto',
							'position': 'absolute',
							'border': '1px solid rgba(0,255,0,0.1)',
							'transform': myArray[i] + 'translateZ(' + wh * .02 + '10px)',
						});

			if (i === 0) {
				$(obj4).css('backgroundColor', 'rgba(0,255,0,0.5)');	
				obj5[x][y] = obj4;		
			}
		}
	}
}

var i = -1;
var intervalID = setInterval(myIntervalFun, 2500);
function myIntervalFun() {
	i += 1;

	if (i % 2 === 0) {
		obj1.style.transform = 'rotateX(45deg) rotateY(45deg)';
	} else {
		obj1.style.transform = 'rotateX(-45deg) rotateY(45deg)';		
	}
	obj1.style.transition = 'transform 0.5s';

	for (var x = 0; x < obj3.length; x++) {
		for (var y = 0; y < obj3[x].length; y++) {

			if (numArray[(i % 10)][x][y] === ' ' ) {
				$(obj5[x][y]).fadeOut(1500);
			
			} else if (numArray[(i % 10)][x][y] === 'X' ) {
				$(obj5[x][y]).fadeIn(1500);					
			}		
	
		}
	}

	var TimerId = setTimeout(myTimeoutFun, 500);
	var TimerId2 = setTimeout(myTimeoutFun2, 1000);

	function myTimeoutFun() {
		for (var x = 0; x < obj3.length; x++) {
			for (var y = 0; y < obj3[x].length; y++) {

				var z = wh * .3 - Math.floor(Math.random()*(wh * .6));
				obj3[x][y].style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(' + z + 'px)';
				obj3[x][y].style.transition = 'transform 1s';
			}
		}
	}

	function myTimeoutFun2() {
		obj1.style.transform = 'rotateX(0deg) rotateY(0deg)';
		obj1.style.transition = 'transform 0.5s';		
	}
}