// // alert("hello");
// // prompt('Тебе есть 18?', 'da');
// // prompt('Сколько лет?');
// // confirm('Тебе есть 18?');

// // let text = 'Hello friends';
// // alert(text);

// let user1 = {
//     name: 'Sveta',
//     'sveta age': 25
// };

// console.log(user1.age);

// user1.age = 30;

// let x = user1.age;

// console.log(user1.age);

// delete user1.age;

// console.log(user1.age);

// console.log(user1);
// console.log(true + false); //1
// console.log('4px' - 2); //NaN

// let animal = prompt('Input animal:');

// if (animal === 'cat') {
//     console.log('cat');
// } else if (animal === 'duck' || animal === 'chicken') {
//     console.log('birds');
// } else {
//     console.log('other animal');
// }

// let user = {
//     firstName: 'John',
//     lastName: 'Do',
//     age: 16
// };

// // for (let key in user) {
// //     console.log(key, user[key]);
// //     //console.log(user[key]);
// // }

// console.log(Object.keys(user));

let data = [{
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40
}, {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age: 54
}, {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24
}];

let inputLastName = prompt("Введите фамилию для поиска:");
let flag = false;
for (let i = 0; i < data.length; i++) {
    if ((data[i].lastName).toUpperCase() === inputLastName.toUpperCase()) {
        alert('user name: ' + data[i].firstName + ' ' + data[i].lastName + '\n' + 'age: ' + data[i].age);
        flag = true;
        break;
    }
}
if (!flag) {
    alert('No results found for your request');
}