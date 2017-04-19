var path = $('.demo path');

var score = 3;

var obj = {
	length: 0,
	pathLength: path[0].getTotalLength()
};


console.log(obj);

path[0].style.stroke = '#ddd';
path[0].style.strokeWidth = '10';

for(var i = 0; i<path.length; i++) {
	path[i].style.fillOpacity = 0;
	TweenMax.to(path[i], 1, {fillOpacity: 1, delay: 2.7});
}

TweenMax.to(obj, 5, {
	length: obj.pathLength,
	onUpdate: drawLine,
	ease: Linear.easeNone
});

TweenMax.to(path[0], 1, {strokeWidth: 0, delay: 2.7});

function drawLine() {
		path[0].style.strokeDasharray = [obj.length,obj.pathLength].join(' ');
}