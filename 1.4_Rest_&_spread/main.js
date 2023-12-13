//Nivell 1


//Ex 1

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 0];

var arr3 = [...arr1, ...arr2];

console.log(arr3)

//Ex 2

function suma (a, b, ...c){

    let result = a + b;

    c.forEach(function(n){
        result += n
    });

    return result;
}

console.log(suma(2, 3, 4, 5, 6, 7))


//Nivell 2

//Ex 3

const objecte1 = {
    color: 'verde',
    size: 'big',
    tipe: 'coche'
}

const objecte2 = {...objecte1}

objecte2.color = 'rojo';

console.log(objecte1)
console.log(objecte2)


//Ex 4

