// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

 let str =('hello world', 'lorem ipsum', 'javascript is cool');

console.log(str.length)

//----///
//
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let sttr = ('hello world');
console.log(sttr.toUpperCase());

let tr = ('lorem ipsum');
console.log(tr.toUpperCase())

let st = ('javascript is cool');
console.log(st.toUpperCase())


//-----/
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let foo = ('JAVASCRIPT IS COOL');
console.log(foo.toLowerCase())

let ft = ('LOREM IPSUM');
console.log(ft.toLowerCase())

let tf = ('HELLO WORLD');
console.log(tf.toLowerCase())


// -----//



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let clear = ' dirty string   ';

console.log(clear.trim())

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні';
const stringToarray = (str) => str.split(' ');
console.log(stringToarray(str2))



//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

console.log(nums.sort(function (a, b) {
    return a - b
}));

console.log(nums.sort(function (a, b) {
    return b - a
}));


//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let mothh = coursesAndDurationArray.sort((u1, u2) => {
    return u2.monthDuration - u1.monthDuration;

});
console.log(mothh)


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let cours = coursesAndDurationArray.filter(month => month.monthDuration > 5);
console.log(cours)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mapped = coursesAndDurationArray.map((value  ,index) => {
    return {
        ... value,
        id: index +1
    }
});
console.log(mapped)






// =========================
//     описати колоду карт (від 6 до туза без джокерів)

const cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
]


// - знайти піковий туз
const ace = cards.find((card) => card.value === 'ace' && card.cardSuit === 'spade' );
console.log(ace)

// - всі шістки
const six =  cards.filter((card) => card.value === '6' )
console.log(six)
// - всі червоні карти
const redd = cards.filter((card => card.color === 'red'));
console.log(redd)
// - всі буби
const buba = cards.filter((card => card.cardSuit === 'diamond'));
console.log(buba)
// - всі трефи від 9 та більше
const trefu = cards.filter((card => card.cardSuit === 'clubs' && [ '9', '10', 'ace', 'jack', 'queen', 'kind']));
console.log(trefu)






