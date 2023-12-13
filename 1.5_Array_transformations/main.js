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