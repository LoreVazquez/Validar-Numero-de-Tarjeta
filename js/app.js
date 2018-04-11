
var numCreditCard = "";

do {
  numCreditCard = prompt("Por favor ingresa los 16 digitos de tu numero de Tarjeta de Credito \n No ingreses espacios en blanco entre numeros."); // Se solicita al usuario que ingrese su numero de tarjeta de credito sin espacios
}
while (!numCreditCard|| !/^[0-9]*$/.test(numCreditCard)); // Condicion de validacion de entrada de datos, se repetira mientras que sea un campo vacio,o si contiene caracteres diferentes de numeros.
  isValidCard(numCreditCard);

  function isValidCard(num){

  var numCreditCardReverse = (numCreditCard.split("")).reverse();// El string de numeros se agregan a un array por medio de split, y se aplica el metodo reverse para obtener los numeros invertidos
  var pairNumbers = []; // Array para almacenar la multiplicacion de los numeros en posiciones pares

  for(var i=0; i < numCreditCardReverse.length; i++){ // Se itenera en el array para identificar las posiciones pares
    if( i % 2 !== 0) {
      var multiplication = numCreditCardReverse[i] * 2; // Variable para obtener la multiplicacion * 2 de los numeros en posiciones pares
        if(multiplication >= 10){ // Condicinal para indicar si el resultado de la multiplicacion es mayor a 10 entonces se deben de sumar sus digitos hasta que solo quede un numero de un solo digito
          var sum = 0;

          while (multiplication){ // While para que sume los digitos de un numero hasta que solo quede un numero de un solo digito
            sum += multiplication % 10;
            multiplication = Math.floor(multiplication/10); // Se redondea el cociente de la division para obtener el resultado de la suma
        }
        pairNumbers.push(sum); // Se agregan los numeros al array pairNumbers
       } else{
         pairNumbers.push(multiplication); // Si el resultado de la multiplicacion es de solo un digito se agrega al array pairNumbers
       }
    } else
    pairNumbers.push(parseInt(numCreditCardReverse[i])); // Se agrega las posiciones impares al array, se convierten de tipo de dato string a number
  }

 var numberToValidate = 0; // Variable para almacenar la suma de numero a validar
  for(var j = 0; j < pairNumbers.length; j++){ // Itenera el array donde ya se multiplicaron los numeros de las posiciones pares
    numberToValidate += pairNumbers[j]; //Va sumando y almacendo cada digito contenido en el array pairNumbers
  }
  if(numberToValidate % 10 === 0){ // Deacuerdo a el algoritmo Luhn si el residuo de la suma de todos los números es igual a 0 entonces el numero es valido
    return console.log("Valido");
  }else{
    return console.log("Invalido");
  }
}
