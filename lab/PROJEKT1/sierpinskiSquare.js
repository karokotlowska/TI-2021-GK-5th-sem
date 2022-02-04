var width = 600;
var height = 600;
var size = 150;
 
function sierpinski(x,y,w,h,d,ctx) {
    if(d>0) {
        sierpinski(x,y,w/3,h/3,d-1,ctx);
        sierpinski(x+w/3,y,w/3,h/3,d-1,ctx);
        sierpinski(x+2*w/3,y,w/3,h/3,d-1,ctx);

        sierpinski(x,y+h/3,w/3,h/3,d-1,ctx);
        sierpinski(x+2*w/3,y+h/3,w/3,h/3,d-1,ctx);

        sierpinski(x,y+2*h/3,w/3,h/3,d-1,ctx);
        sierpinski(x+w/3,y+2*h/3,w/3,h/3,d-1,ctx);
        sierpinski(x+2*w/3,y+2*h/3,w/3,h/3,d-1,ctx);
    }
    else{
        let xmid=x;
        let ymid=y;
       
        ctx.fillStyle="#D599BF";
        ctx.fillRect(xmid, ymid,w, h);
    }

}
 
 
function drawSquare(depth,ctx) {
    ctx.fillStyle="white";
    ctx.fillRect(0,0,900,900);
    
    sierpinski(600/6,600/15,2*600/3,2*600/3,depth,ctx);
}


function drawLineSquare(x1,y1,x2,y2,ratio,ctx) {
  var randomColor1=['#845EC2','#D599BF','#4056a1','#008F7A','#11819F','#B0A8B9'];
	ctx.strokeStyle ='#D599BF';
  ctx.fillStyle="white";
  ctx.fillRect(0,0,900,900);
  ctx.moveTo(x1,y1);
  x2 = x1 + ratio * (x2-x1);
  y2 = y1 + ratio * (y2-y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
}

function animateSquare(x1,x2,x3,x4,ratio,ctx) {
  ratio = ratio || 0;
  drawLineSquare(x1,x2,x3,x4,ratio,ctx);
  if(ratio<1) {
    window.requestAnimationFrame(function() {
      animateSquare(x1,x2,x3,x4,ratio + 0.04,ctx);
    });
  }
}
