function isPalindrome(str) {
    str = str.toUpperCase();
    return str === str.split('').reverse().join('');
}

function min(a, b) {
    return (a < b) ? a : b;
}

function max(a, b) {
    return (a > b) ? a : b;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function createArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(getRandomIntInclusive(0, 100));
    }
    return arr;
}

function replaceZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = String(arr[i]);
        arr[i] = arr[i].split('');
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '0') {
                arr[i][j] = 'zero';
            }
        }
        arr[i] = arr[i].join('');
    }
    return arr;
}

console.log(isPalindrome('Anna'));

console.log('min ' + min(5, 1));
console.log('max ' + max(7, 9));

let array = createArray(10);
console.log(array);
console.log(replaceZero(array));