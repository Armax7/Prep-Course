// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for (let key in objeto) {
    matriz.push([key, objeto[key]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const objectKeyValue = {};
  for (var i = 0; i < string.length; i++) {
    if (string[i] in objectKeyValue) {
      objectKeyValue[string[i]] += 1;
    } else {
      objectKeyValue[string[i]] = 1;
    }
  }
  return objectKeyValue;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var upperArray = [];
  var lowerArray = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upperArray.push(s[i]);
    } else {
      lowerArray.push(s[i]);
    }
  }
  var newStrArr = upperArray.join('') + lowerArray.join('');
  return newStrArr;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var mirrorString = "";
  var stringsArray = str.split(' ');

  for (var i = 0; i < stringsArray.length; i++) {
    var substringLength = stringsArray[i].length;
    for (var c = substringLength; c >= 0; c--) {
      mirrorString = `${mirrorString}${stringsArray[i].charAt(c)}`;
    }
    mirrorString = `${mirrorString} `;
  }

  return mirrorString.trimEnd();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var nAsString =  numero.toString();
  var halfStringLength = Math.floor(nAsString.length / 2);
  var nStringLastIndex = nAsString.length - 1;
  var isCapicua = "Es capicua";

  for (var i = 0; i <= halfStringLength; i++) {
    if (nAsString[i] !== nAsString[nStringLastIndex - i]) {
      isCapicua = "No es capicua";
    }
  }
  return isCapicua;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  nString = '';
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {
      nString = `${nString}${cadena[i]}`;
    }
  }
  return nString;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (var i = 0; i < arr.length - 1; i++) {

    var smallStringIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        smallStringIndex = j;
      }
    }

    if (smallStringIndex !== i) {
      var stringHolder = arr[i];
      arr[i] = arr[smallStringIndex];
      arr[smallStringIndex] = stringHolder;
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var intersection = [];
  for (var i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])) {
      intersection.push(arreglo1[i]);
    }
  }
  return intersection;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

