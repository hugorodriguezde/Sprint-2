//Nivell 1


//Ex 1

function processar (num, callback)
{
    callback(num);
}

//Ex 2

function calculadora (num1, num2, callback)
{
    return callback(num1, num2)
}

console.log(calculadora(2, 4, (a, b) => a + b))


//Nivell 2

//Ex 3

function esperarISaludar (name, callback)
{
    setTimeout (() => {
        console.log(callback(name))
    }, 2000);   
}

function greet (name) {
    return 'Hola ' + name
}

esperarISaludar('Pepito', greet)


//Ex 4

function processarElements (cadena, callback)
{
    for (let i = 0; i < cadena.length; i++)
    {
        callback(cadena[i])
    }
}

function printEachOne(caracter)
{
    console.log(caracter)
}

processarElements(['a', 'b', 'c', 'd'], printEachOne)


//Nivell 3

//Ex 5

let myCadena= 'estoy gritando'

function processarCadena (cadena, callback)
{
    var res = cadena.toUpperCase()
    callback(res)
}

function printMayus(cadena)
{
     console.log(cadena)
}
processarCadena(myCadena, printMayus);