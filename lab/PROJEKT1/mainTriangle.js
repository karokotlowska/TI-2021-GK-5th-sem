var canvas1 = document.getElementById("sierpinskiCanvas1");
var ctx1 = canvas1.getContext("2d");	
var fillColor1;
var randomColor1;
var depth1;
var iteration1;
var timer1;

function getRandomIntInclusive1(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function setFillColor1(){
    randomColor1=['#845EC2','#D599BF','#4056a1','#008F7A','#11819F','#B0A8B9'];
	ctx1.fillStyle = randomColor1[ getRandomIntInclusive1(0,5)];
	ctx1.fill();
}

function updateCanvas1(){	
	var slider = document.getElementById("myRange1");
	depth1 = slider.value;
    setFillColor1();
	document.getElementById("rangeInfo1").innerHTML = depth1; 
	drawSierpinski1(depth1);
}

function startAnimation1(){
	iteration1 = 1;
	clearCanvas1();
	drawSierpinski1(0);
	timer1 = setInterval(showAnimation1, 1000);
}

function showAnimation1(){
	drawSierpinski1(iteration1%4);
	iteration1+=1;
}

function stopAnimation1(){
	clearInterval(timer1);
}

function drawSierpinski1(d){	
	clearCanvas1();
	drawTriangle1(d,ctx1);		
	ctx1.fillStyle =fillColor1;
	ctx1.fill();
	ctx1.strokeStyle = 'black';
	ctx1.lineWidth = 1;
	ctx1.stroke();
}

function clearCanvas1(){
	ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
	ctx1.resetTransform();
	ctx1.beginPath();
	ctx1.moveTo(0,0);
}



setFillColor1();
updateCanvas1();