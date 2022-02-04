var width1 = 600;
var height1 = 600;
var size1 = 500;



function sierpinski1(Ax,Ay,Bx,By,Cx,Cy,d,ctx) {
    
    if(d>0) {
        var pointAx = (Bx + Cx) / 2;
        var pointAy = (By + Cy) / 2;
 
        var pointBx = (Ax + Cx) / 2;
        var pointBy = (Ay + Cy) / 2;
 
        var pointCx = (Ax + Bx) / 2;
        var pointCy = (Ay + By) / 2;
 
        sierpinski1(Ax,Ay,pointBx,pointBy,pointCx,pointCy,d-1,ctx);
        sierpinski1(pointCx,pointCy,pointAx,pointAy,Bx,By,d-1,ctx);
        sierpinski1(pointBx,pointBy,pointAx,pointAy,Cx,Cy,d-1,ctx);
    }
    else {
        
        ratio=0;
        animate(Ax,Ay,Bx,By,0,ctx);
        ratio=0;
        animate(Bx,By,Cx,Cy,ratio + 0.01,ctx);
        ratio=0;
        animate(Cx,Cy,Ax,Ay,ratio + 0.01,ctx);

        
    }
}
 
 
function drawTriangle1(depth,ctx) {
    var midPointX = width1/2;
    var midPointY = height1/2;
 
    var ri = (size1/6) * Math.sqrt(3);
    var ru = (size1/3) * Math.sqrt(3);
 
    var pointAx = midPointX-(size1/2);
    var pointAy = midPointY+ri;
 
    var pointBx = midPointX+(size1/2);
    var pointBy = midPointY+ri;
 
    var pointCx = midPointX;
    var pointCy = midPointY-ru;
 
    var ratio=0;
    sierpinski1(pointAx,pointAy,pointBx,pointBy,pointCx,pointCy,depth,ctx);
}




function drawLine(x1,y1,x2,y2,ratio,ctx) {
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

function animate(x1,x2,x3,x4,ratio,ctx) {
  ratio = ratio || 0;
  drawLine(x1,x2,x3,x4,ratio,ctx);
  if(ratio<1) {
    window.requestAnimationFrame(function() {
      animate(x1,x2,x3,x4,ratio + 0.05,ctx);
    });
  }
}

