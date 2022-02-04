var worker;

function startWorker() {
   
    worker = new Worker("./worker.js");
    var liczbaRekurencji=document.getElementById("liczbaRekurencji").value;
    worker.postMessage(liczbaRekurencji);
    
    worker.onmessage=function(event){
        document.getElementById("wynik").innerHTML=event.data;
    }
    
  }

