//Nivell 1


//Ex 1

let nom = ['Anna', 'Bernat', 'Clara'];

nom.forEach(function(name) {
    console.log(name);
});


//Ex 2

let noms = ['Anna', 'Bernat', 'Clara'];

for (let name of noms)
{
    console.log(name);
}


//Ex 3

let numeros = [1, 2, 3, 4, 5, 6];

let arrNums = numeros.filter(function (n) {
    if (n % 2 === 0){
        return n
    }
})

console.log(arrNums);


//Nivell 2


//Ex 4

let obj = {
    nom: 'Ona',
    edat: 25,
    ciutat: 'Barcelona'
}

for (let property in obj) {
    console.log(property, obj[property]);
}


//Ex 5 

let ex5 = [1, 2, 3, 4, 5, 6];

for (let num of ex5){
    if (num === 5){
        break;
    }
    console.log(num);
}


//Nivell 3


//Ex 6

let ex6 = ['Anna', 'Bernat', 'Clara'];

for (let [index, nom] of ex6.entries())
{
    console.log(nom, index)
}