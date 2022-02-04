var canvas = document.getElementById("sierpinskiCanvas");
var ctx = canvas.getContext("2d");	
var fillColor;
var randomColor;
var depth;
var iteration;
var timer;


function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function setFillColor(){
    randomColor=['#845EC2','#D599BF','#4056a1','#008F7A','#11819F','#B0A8B9'];
	ctx.fillStyle = randomColor[ getRandomIntInclusive(0,5)];
	ctx.fill();
}

function updateCanvas(){	
	var slider = document.getElementById("myRange");
	depth = slider.value;
    setFillColor();
	document.getElementById("rangeInfo").innerHTML = depth; 
	drawSierpinski(depth);
}

function drawSierpinski(d){	
	clearCanvas();
	drawSquare(d,ctx);		
	ctx.fillStyle =fillColor;
	ctx.fill();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 1;
	ctx.stroke();
}

function startAnimation(){
	iteration = 1;
	clearCanvas();
	drawSierpinski(0);
	timer = setInterval(showAnimation, 1000);
}

function showAnimation(){
	drawSierpinski(iteration%5);
	iteration+=1;
}

function stopAnimation(){
	clearInterval(timer);
}

function clearCanvas(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.resetTransform();
	ctx.beginPath();
	ctx.moveTo(0,0);
}



setFillColor();
updateCanvas();