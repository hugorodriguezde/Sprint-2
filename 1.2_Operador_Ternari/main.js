//Nivell 1

//Ex 1

function potConduir(edad){
    return edad >= 18 ? 'Pots conduir' : 'No pots conduir';
}

console.log(potConduir(18))
console.log(potConduir(4))

//Ex 2

let num1 = 5
let num2 = 6

let result = num1 > num2 ? 'Num1 es mes gran' : 'Num2 es mes gran';

console.log(result);

//Nivell 2

//Ex 3

let num = -1
let resultat = num == 0 ? 'zero' : num > 0 ? 'positiu' : 'negatiu'; 
console.log(resultat);

//Nivell 3

//Ex 4

let numArray = [1, 3, 5, 6, 7, 8];

function    parOImpar(nums) {
    for (let i = 0; i < nums.length; i++)
    {
        let parONo = nums[i] % 2 == 0 ? 'parell' : 'imparell';
        console.log(parONo)
    }
}

parOImpar(numArray);