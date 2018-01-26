var numArray = [
			   [[0, 1, 1, 1, 0],		//  9
				[1, 0, 0, 0, 1],
				[1, 0, 0, 0, 1],
				[0, 1, 1, 1, 1],
				[0, 0, 0, 0, 1],	
				[0, 0, 0, 0, 1],
				[1, 0, 0, 0, 1],	
				[0, 1, 1, 1, 0]],

			   [[0, 1, 1, 1, 0],		//	8
				[1, 0, 0, 0, 1],
				[1, 0, 0, 0, 1],
				[1, 0, 0, 0, 1],
				[1, 0, 0, 0, 1],	
				[1, 0, 0, 0, 1],
				[1, 0, 0, 0, 1],	
				[0, 1, 1, 1, 0]]

			   [[0, 0, 1, 0, 0],		//	7
				[0, 1, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],	
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],	
				[0, 1, 1, 1, 0]],

			   [[0, 0, 1, 0, 0],		//	6
				[0, 1, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],	
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],	
				[0, 1, 1, 1, 0]],

			   [[0, 0, 1, 0, 0],		//	5
				[0, 1, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],	
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],	
				[0, 1, 1, 1, 0]]

				];

var obj = document.createElement('div');
document.body.appendChild(obj);
$(obj).addClass('bigblock');

var obj1 = document.createElement('div');
$(obj).append(obj1);
$(obj1).addClass('rotateblock');

var myArray = ['front', 'back', 'right', 'left', 'top', 'bottom'];

for (var i = 0; i < myArray.length; i++) {
	var classNameVar = 'side ' + myArray[i];
	var obj2 = document.createElement('div');
	$(obj1).append(obj2);
	$(obj2).addClass(classNameVar);
}

var obj3 = new Array();
var obj5 = new Array();
for (var x = 0; x < 8; x++) {
	obj3[x] = new Array();
	obj5[x] = new Array();
	for (var y = 0; y < 5; y++) {
		obj3[x][y] = document.createElement('div');
		$(obj1).append(obj3[x][y]);
		$(obj3[x][y]).addClass('smallblock');
		$(obj3[x][y]).css('top', (10 + x * 23) + 'px');
		$(obj3[x][y]).css('left', (46 + y * 23) + 'px');
		var z = 100 - Math.floor(Math.random()*200);
		obj3[x][y].style.transform = 'translateZ(' + z + 'px)';

		for (var i = 0; i < myArray.length; i++) {
			var obj4 = document.createElement('div');
			$(obj3[x][y]).append(obj4);
			var classNameVar = 'smallside small' + myArray[i];
			$(obj4).addClass(classNameVar);
			if (i === 0) {
				$(obj4).css({'backgroundColor' : 'rgba(0,255,0,0.5)', 'color':'#0f0'});	
				obj5[x][y] = obj4;		
			}
		}
	}
}

var i = 0;
var intervalID = setInterval(myfun, 3500);
function myfun() {
	i += 1;
	obj1.style.transform = 
		'rotateX(' + ((i % 2) * 180 + 0.5) + 'deg)' + 
		'rotateY(' + ((i % 2) * 180 + 0.5) + 'deg)';
	obj1.style.transition = 'transform 1.5s';

	for (var x = 0; x < obj3.length; x++) {
		for (var y = 0; y < obj3[x].length; y++) {
			var z = 100 - Math.floor(Math.random()*200);
			obj3[x][y].style.transform =  
				'rotateX(' + ((i % 2) * 360 + 0.5) + 'deg)' + 
				'rotateY(' + ((i % 2) * 360 + 0.5) + 'deg)' +
				'translateZ(' + z + 'px)';
			obj3[x][y].style.transition = 'transform 2s';
			if (numArray[(i % 5)][x][y] === 0 ) {
				$(obj5[x][y]).css('backgroundColor', 'rgba(0,0,0,0)');
			} else if (numArray[(i % 5)][x][y] === 1 ) {
				$(obj5[x][y]).css('backgroundColor', 'rgba(0,255,0,0.4)');
			}		
		}
	}
}
