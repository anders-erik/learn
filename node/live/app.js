console.log('hello, world');

let x = 3;

let date1 = new Date(1.7e13);


console.log(date1.toString());

console.log(Date.now());

console.log(date1[Symbol.toPrimitive]('number'));

let date = new Date(Date.now());
console.log( date[Symbol.toPrimitive]('number') );

console.log(date.valueOf());

console.log( (Date.parse('01 Jan 1970 15:00:00 GMT')).valueOf() )

console.log('\nBirthday:');
let birthday = new Date(1994, 2, 22); // the month is 0-indexed
console.log(birthday.valueOf());
console.log(birthday);
birthday = new Date(birthday.valueOf() + 86400000);
console.log(birthday.valueOf());
console.log(birthday);
 

console.log(Number.EPSILON);

const result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result == 1);

let num = new Number(55);
console.log(num == 55);

let b127 = 0b01111111;
console.log(b127 << 1);

let x127 = 0x7f;
console.log(x127 << 1);



