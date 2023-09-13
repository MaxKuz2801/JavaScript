// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function culm(a, b){
    let result = a * b;
    return result;
}

let r1 = culm(10, 20);

console.log(r1);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function kolo(p, r){
    let result = p * r;
    return result
}

let r2 = kolo(3.14, 25)

console.log(r2)



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function ts(p, h, r) {
    let result = 2 * p * h * r;
    return result
}

let r3 = ts(3.14, 200, 78.5)

console.log(r3)



// - створити функцію яка приймає масив та виводить кожен його елемент
function user(array){
    for (const item of array) {
        console.log(item)
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
user(users)



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function tx(){
    console.log(arguments);
}

tx('Hello my friends');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(text1, text2, text3){
    document.write(
        `<div>
                <li>${text1} ${text2} ${text3}</li>
                
        </div>
        `
    );
}

ul('Hello', 'my', 'friend');
ul('Hello', 'my', 'friend');
ul('Hello', 'my', 'friend');




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список





// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function processObjects(objects) {

    for (const object of objects) {

        const innerHtml = `<div class="object">
         ID: ${object.id}<br/>
         Name: ${object.name}<br/>
         Age: ${object.age}
      </div>`

        document.getElementById('blocks').innerHTML += innerHtml;
    }

}


processObjects(
    [
        {
            id: 123,
            name: 'name',
            age: 23
        },
        {
            id: 333,
            name: 'secondName',
            age: 21
        },
        {
            id: 999,
            name: 'akjsdkajsd',
            age: 25
        },
        {
            id: 999,
            name: 'akjsdkajsd',
            age: 25
        },
        {
            id: 999,
            name: 'akjsdkajsd',
            age: 25
        },
        {
            id: 999,
            name: 'akjsdkajsd',
            age: 25
        },
        {
            id: 999,
            name: 'akjsdkajsd',
            age: 25
        },
        {
            id: 999,
            name: 'akjsdkajsd',
            age: 25
        },
        {
            id: 999,
            name: 'akjsdkajsd',
            age: 25
        }
    ]);
// - створити функцію яка повертає найменьше число з масиву







// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumValuesV2(values) {
    let sum = 0;

    for (const value of values) {
        sum += value;

        console.log(sum);
    }

    return sum;
}

sumValuesV2([1, 2, 3, 4, 5]);




// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250




