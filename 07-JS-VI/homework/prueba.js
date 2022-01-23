
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    //Tu código:
    var sumar=0;
    var numeros=[1,2,3,4,5]
    function funcionsumar(numero){
      sumar+=numero;
      console.log(sumar);
    }
    numeros.forEach(funcionsumar)
    console.log(sumar+1);
    function cb(){console.log(sumar+2)};
    cb(sumar);
  