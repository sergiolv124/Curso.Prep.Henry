/*var objeto={
      D: 1,
      B: 2,
      C: 3
    }
  //Escribe tu código aquí
  const arreglo =[]
	for( x in objeto){
    arreglo.push([x, objeto[x]])
    console.log(arreglo)
	}
  console.log(arreglo)*/
  ///////////////////////////////////////////////////////////////////////////////////////////////
/*
  var obj = {}
  var string='adsjfdsfsfjsdjfhacabcsbajda'
//console.log(Object.keys(obj));

  for (let i = 0; i < string.length; i++) {
      console.log(i)
    console.log(Object.keys(obj));
    console.log(obj);
    console.log(Object.keys(obj).includes(string[i]));  
    if (Object.keys(obj).includes(string[i])) {
        //console.log(obj[string[i]])
      obj[string[i]] = obj[string[i]] + 1
      
      continue;
    }
    obj[string[i]] = 1
  }
  console.log(obj);
    */
   /////////////////////////////////////////////////////////////////////////////////////////
  /* var str="The Henry Challenge is close!";
   var phrase = str.split(' ').map(function (item) {
   return item.split('').reverse().join('');
   
  }).join(' ');
 // return phrase;
 console.log(str.split(' ').map(function (item) {
    return item.split('').reverse().join('')}))
console.log(phrase) */
////////////////////////////////////////////////////////////////////////////////////////////
/*
var array1=[2,3,4,5]
var array2=[1,5,4,8,3,3,3,3]
let union=array1.concat(array2)
var interseccion=union.filter((numero,posicion,numeros)=>{
  return posicion!==numeros.indexOf(numero);
})
console.log(interseccion);
*/

var impar=[1,5,9,2,4,6]
var sumaImpar=impar.reduce((a,c)=>(c%2 !== 0 ? a+c:a),0)
console.log(sumaImpar)