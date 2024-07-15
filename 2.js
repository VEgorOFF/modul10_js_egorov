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