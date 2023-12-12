// Nivell 1

//Ex 1

const add = (a, b) => a + b;

console.log(add(4, 5))

//Ex 2

const randomNumber = () => Math.floor(Math.random() * 101);

console.log(randomNumber())

//Ex 3

function greet () {
    const saludo = () => {
        console.log('Hola, ' + this.name);
    }
    saludo()
}

let person = {
    name: "Pepito",
    greet: greet
}

person.greet()

// Nivell 2

//Ex 4

function printNumbers (myArray) {
    for ( i = 0; i < myArray.length; i++)
        {
            const printResult = () =>
            { 
            console.log(myArray[i]);
            }
            printResult()
        }
}

let unArray = [1, 2, 3, 4, 5];

printNumbers(unArray);

//Nivell 3

//Ex 5

setTimeout(() => {
    console.log('3s late');
}, 3000);


const late = () =>'3s late'
setTimeout(late, 3000);
console.log(late())