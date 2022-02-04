var liczbaRekurencji;

self.addEventListener(
    "message",
    function (e) {
        liczbaRekurencji=e.data;
        calculateRecursion();
    },
    false
  );

function calculateRecursion(){
      var liczbaSquare=Math.pow(8,liczbaRekurencji);
      var liczbaTriangle=Math.pow(3,liczbaRekurencji);

      postMessage("Liczba kwadratów dla dywanu Sierpińskiego przy "+liczbaRekurencji+" rekurencjach wynosi "+liczbaSquare+"<br>"+"Liczba trójkątów dla trójkąta Sierpińskiego przy "+liczbaRekurencji+" rekurencjach wynosi "+liczbaTriangle);
  }