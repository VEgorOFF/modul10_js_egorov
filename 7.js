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