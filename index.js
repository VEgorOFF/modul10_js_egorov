// 1
let a = +prompt("Введите число:")

if (typeof a === 'number' && !isNaN(a)) {
    if (a % 2 === 0) {
        console.log("Четное")
    } else {
        console.log("нечетное")
    }
} else {
    console.log("Упс, кажется, вы ошиблись")
}




// 2
let a = "строка"

switch (typeof (a)) {
    case 'number':
        console.log('число');
        break;
    case 'string':
        console.log('строка');
        break;
    case 'boolean':
        console.log('булевый');
        break;

    default:
        console.log('тип не известен');
}





//3
const text = 'Hello';

const result = text
    .split('')
    .reverse()
    .join('')

console.log(result)


//4

let a = Math.round(Math.random() * 100)
console.log(a)


//5

let arr = ['one', 'two', 'third', true, 5, 6];

console.log('Количество элементов в массиве', arr.length);
arr.forEach(function (elem) {
    console.log('Элемент:', elem);
});


//6

const listNumber = [1, 1, 1, 2];
let check = true;

for (let index = 1; index < listNumber.length; index++) {
    let element = listNumber[index];

    if (element != listNumber[0]) {
        check = false;
        break;
    }

}
console.log(check);

//7

let arr = [1, 2, 2, 0, 2, true, 'sss', null, 1, 7, 5, 4, 8, true, 'sss', null];

let a = 0; //четные
let b = 0; //нечетные


for (let i = 0; i < arr.length; i++) {

    let element = arr[i];
    let type = typeof (arr[i]);

    switch (type) {

        //numbers
        case 'number':

            if (element !== 0) {

                if (element % 2 === 0) {
                    console.log('Элемент', element, 'четный');
                    a++;
                }

                else {
                    console.log('Элемент', element, 'нечетный');
                    b++;
                }

            }

            else {
                console.log('Элемент', element, 'это 0');
            }

            break;


        //остальное
        case 'string': console.log('Элемент', element, 'это не число');
            break;

        case 'object': console.log('Элемент', element, 'это не число');
            break;

        case 'boolean': console.log('Элемент', element, 'это не число');
            break;

        case 'symbol': console.log('Элемент', element, 'это не число');
            break;

    }

}

console.log('Количество четных', a);
console.log('Количество нечетных', b);


//8

let fruits = new Map([

    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry", "blue"]

]);


for (let [key, value] of fruits) {

    console.log(`key: ${key}, value: ${value}`);

}








