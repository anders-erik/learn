console.log('hello, world');

let x = 3;

let date1 = new Date(1.7e12);

// print current date
console.log(Date.now().toString());

// print current date in unix epoch




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
console.log(birthday - birthday)
 
console.log("Fan ta dig");
let date2 = new Date("2023-11-14");
console.log( (1700000000 - (date2.valueOf() / 1000)) / 3600  );
let date3 = new Date(2023, 10, 14, 23, 13, 20, 0);
console.log(date3.valueOf());


let userInput = "console.log('in function'); return 2+4;";
let result = Function(userInput);

console.log(result());
console.log(result.toString());

let str1 = "sd \
sd \
sd \
";

let str2 = `sd 
sd 
sd 
`;
console.log(str1);
console.log(str2);



console.log('----------------------');

// store functions in object (initially tried to store in array)
var arr = {};
let f1 = new Function('name', 'console.log(name); \nreturn "11";');
let f2 = new Function('name', 'console.log(name); \nreturn "22";');
arr['f1'] = f1;
arr.f2 = f2;

arr['f1']('f1 string');
arr.f1('f1 string');
f1('f1 string');

arr['f2']('f2 string');
arr.f2('f2 string');
console.log(f2('f2 string'));
console.log(f2.toString());
console.log('----------------------');
// tried to print 
console.log(JSON.stringify(arr));
console.log(arr['f1']);
console.log(typeof(arr));
// print object properties
for (var key in arr) {
    if (arr.hasOwnProperty(key)) {
        /* useful code here */
		console.log(key);
    }
}
console.log("\n" + arr.f1.toString());
console.log('----------------------');

/*
arr.forEach(el => {
	console.log(el);
});
*/

var ar = [];
ar['aa'] = "cont";
ar.push("1");
ar.push("2");
ar.push("3");
console.log(ar['aa']);
console.log(ar);
ar.forEach(element => {
	console.log(typeof(element));	
});
