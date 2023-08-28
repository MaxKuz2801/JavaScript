//1//
function culm(a, b){
    let result = a * b;
    return result;
}

let r1 = culm(10, 20);

console.log(r1);

//----------------//

//2//
function kolo(p, r){
    let result = p * r;
    return result
}

let r2 = kolo(3.14, 25)

console.log(r2)


//-----------------//

//3//
function ts(p, h, r) {
    let result = 2 * p * h * r;
    return result
}

let r3 = ts(3.14, 200, 78.5)

console.log(r3)



//--------------------//
//4//
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

//----------//

//5//
function tx(){
    console.log(arguments);
}

tx('Hello my friends');


//-----------//


//6//
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


//--------//

//9//
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


//-----//
//11//
function sumValuesV2(values) {
    let sum = 0;

    for (const value of values) {
        sum += value;

        console.log(sum);
    }

    return sum;
}

sumValuesV2([1, 2, 3, 4, 5]);

