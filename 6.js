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