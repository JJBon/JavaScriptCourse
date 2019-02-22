var firstName = 'Jhon';
console.log(firstName);

// string
var lastName = 'Smith';

// float/int
var age = 28;

//boolean
var fullAge = true;
console.log(fullAge);

// undefined
var job;
console.log(job);

job = 'Teacher';
console.log(job);

var job, isMarried;
job = 'Carpinter';
isMarried = false;

// alert(firstName + ' is a ' + age + ' year old ' + 
//     job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/**************************
 * Basic operators
 */
var year, yearJohn , yearMark;
now = 2018;
yearJohn = 28;
yearMark = 33;


// Math operators

 var ageJohn = year - yearJohn;
 var ageMark = year - yearMark;

 console.log(yearJohn);

 // Logical operators
 var johnOlder = ageJohn > ageMark;
 console.log(johnOlder);

 // typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "One string");

var heightMark, massMark, heightJohn, heightMark;
heightMark = 180
heightJohn = 176
massMark = 81
massJohn = 76

bmIndexJohn = massJohn / (heightJohn * heightJohn)
bmIndexMark = massMark / (heightMark * heightMark)

markGreater = massMark > massJohn
console.log("Is Mark's Bmi greater than John's" + markGreater)

/*
if / else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + " is married");
} else if (civilStatus == 'not married') {
    console.log(firstName + ' will hopefully marry soon :)');
} else {
    console.log("default result")
}

/* ternary operator  and switch statement */

var firstName = 'John';
var age = 16;

age > 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks beer.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


// Switch Statement

var job = 'teacher'
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
    case 'driver':
        console.log(firstName + ' driver an uber in Lisbon.');
    case 'design':
        console.log(firstName, ' designs beautiful websites.');
    default:
        console.log(firstName + ' does something else.');
}

// switch(true){
//     case age < 13:
//     console.log("")
// }

// falsy values: undefined , null , 0 , '' , NaN
// truthy values: NOT falsy values

var height;

// == enforces type coercion

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// function declaration , no return value , referred as statements

//function whatDoYouDo(job, firstName){}

/* function expressions must return value */ 

//var whatDoYouDo =  function(job , firstName) {}

/******
 * Arrays
 */

 var names = ['John','Mark','Jane'];
 var years = new Array(1900,1969,1948);
 var len = names.length

 names[5] = 'Mary' // 4 element appears in console as empty 

 // Different data types
 var john = ['John','Smith',1989,'tecaher',false]

 john.push('blue'); // add at the end
 john.unshift('Mr') // add at the beggining
 console.log(john);

 john.pop(); // removes last element
 john.shift(); // removes and returns first element

 john.indexOf(1989); // -1 if not found

/**********
 * Objects and properties JSON
 *   */ 

 var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: '1990',
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    // calcAge: function(birthYear){
    //     return 2018 - birthYear;
    // }
    calcAge: function(){
        var age = 2018 - this.birthYear;
        this.age = age;
        return age;
    }
 };

 console.log(john.firstName);
 console.log(john['lastName']);

 // new object syntax
 var jane = new Object();
 jane.name = 'Jane';
 jane.birthYear = 1969;

//  console.log(john.calcAge(1990));
console.log(john.calcAge());

/* loops */

for (var i = 0; i < 10 ; i++) {
    console.log(i);
}
for ( var i = 0; i < john.length; i++) {
    console.log(john[i]);
}


var i = 0
while( i < john.length){
    console.log(john[i]);
    i++;
}







