//Nivell 1

//Ex 1

function promiseWorld() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('Hola, mon')
        }, 2000)
    })
}


//Ex 2

promiseWorld()
.then((result) => {
    console.log(result);
})


//Ex 3

function greetPromise(input) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (input == 'Hola'){
                resolve('Promesa resolta')
            }
            else{
                reject(new Error('Promesa rebutjada'))
            }
            }, 2000)
        })
    }

greetPromise('Hola')
.then((result) => {
    console.log(result);
})

greetPromise('Adeu')
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error.message);
})


//Ex 4

async function waitResults(){
    const result = await promiseWorld();
    console.log(result);
}

waitResults();


//Ex 5

async function waitResult(){
    try{
        const result = await promiseWorld();
        console.log(result);
    } catch (err){
        console.log(err);
    }
}

waitResult()


//Nivell 3


//Ex 6


function helloWorld() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('Hello, world')
        }, 2000)
    })
}


function bye() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('Bye')
        }, 3000)
    })
}

Promise.all([helloWorld(), bye()])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})