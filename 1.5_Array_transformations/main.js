//Nivell 1

//Ex 1

const ex1 = [1, 2, 3, 4];

const arrSquare = ex1.map(function(n) {
    var result = n * n;
    return result
})

console.log(arrSquare)


//Ex 2

const ex2 = [1, 2, 3, 4];

const arrFilter = ex2.filter(function(n) {
    if (n % 2 === 0){
        var result = n;
    }
    return result
})

console.log(arrFilter);


//Ex 3

const ex3 = [1, 10, 8, 11];

const arrFind = ex3.find(function(n) {
    if (n > 10){
        return n
    }
})

console.log(arrFind)


//Ex 4

const ex4 = [13, 7, 8, 21];

const arrReduce = ex4.reduce ((ac, n) => {
        return ac + n;
}, 0);

console.log(arrReduce);


//Nivell 2


//Ex 5

const ex5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]

const arrResult = (arr) =>arr.filter(n => n>= 10).map(n => n * 2).reduce((ac, n) => ac + n);

console.log(arrResult(ex5));


//Nivell 3


//Ex 6

const ex6 = [11, 12, 13, 14]

const arrSome = ex6.some (n => n >= 10);

const arrEvery = ex6.every(n => n >= 10);

console.log(arrSome)
console.log(arrEvery)