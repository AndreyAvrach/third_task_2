// ---------------------------------------------------- //
// -------------         STRINGS     ------------------ //
// ---------------------------------------------------- //

// ---------------------------------------------------- //
// 1. Returns the result of concatenation of two strings.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
// 'aa', 'bb' => 'aabb'
// 'aa',''    => 'aa'
// '',  'bb'  => 'bb'
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function concatenateStrings(value1, value2) {
return value1.concat(value2);
}
console.log(concatenateStrings('aa', 'bb') ); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 2. Returns the result of string template and given parameters firstName and lastName.
// Please do not use concatenation, use template string!!!
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
// 'John','Doe'      => 'Hello, John Doe!'
// 'Chuck','Norris'  => 'Hello, Chuck Norris!'
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/*function getStringFromTemplate(firstName, lastName) {
   return 'Hello, ' + firstName +' '+lastName+'!';
} 
console.log(getStringFromTemplate('Chuck','Norris'));*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 3. Returns a string that repeated the specified number of times.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
// 'A', 5  => 'AAAAA'
// 'cat', 3 => 'catcatcat'
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
 /*function repeatString(value, count) {
return value.repeat(count);

}
console.log(repeatString('cat', 3)); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 4. Remove the first and last angle brackets from tag string
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   '<div>' => 'div'
//   '<span>' => 'span'
//   '<a>' => 'a'
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
 /* function unbracketTag(str) {
return str.replace(/\<|\>/g, '');
}
console.log(unbracketTag('<span>'));*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 5. Extracts e-mails from single string with e-mails list delimeted by semicolons
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
//   => [
//      'angus.young@gmail.com',
//      'brian.johnson@hotmail.com',
//      'bon.scott@yahoo.com'
//   ],
//
//   'info@gmail.com' => ['info@gmail.com']
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
 /*function extractEmails(str) {
   return str.split(';');
} 
console.log(extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'))*/
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// -------------         NUMBERS     ------------------ //
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// 6. Returns an area of a rectangle given by width and heigth.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   5, 10 => 50
//   5, 5  => 25
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getRectangleArea(width, height) {
   return width*height;
}
console.log(getRectangleArea(15, 2));*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 7. Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  5*x - 10 = 0    => 2
//  x + 8 = 0       => -8
//  5*x = 0         => 0`
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/*function getLinearEquationRoot(a, b) {
    return -b / a;
    }
    console.log (getLinearEquationRoot(1, 8));*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 8. Returns a number by given string representation.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  '100'     => 100
//  '37'     => 37
//  '-525.5'     => -525.5
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
 /*function parseNumberFromString(value) {
 return +value;
} 
console.log(parseNumberFromString('55'));*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 9. Returns a distance beetween two points by cartesian coordinates.
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  (0,0) (0,1)    => 1
//  (0,0) (1,0)    => 1
//  (-5,0) (10,-10) => 18.027756377319946
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getDistanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}
console.log(getDistanceBetweenPoints(-5, 0, 10, 10)) */
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// -------------         ARRAYS      ------------------ //
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// 10. Returns an index of the specified element in array or -1 if element is not found
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  ['Ace', 10, true], 10    => 1
//  ['Array', 'Number', 'string'], 'Date'    => -1
//  [0, 1, 2, 3, 4, 5], 5    => 5
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/*function findElement(arr, value) {
    return arr.indexOf(value);
}
console.log (findElement([0, 1, 2, 3, 4, 5], 5));*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 11. Returns an array of positive numbers from the specified array in original order
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
//  [-1, 2, -5, -4, 0] => [ 2 ]
//  [] => []
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
 /*function getArrayOfPositives(arr) {
   return arr.filter(elem => {
        return elem > 0;
});
 }
console.log(getArrayOfPositives([-11, 2, -5, 4, 0, 8, 18, 3]))*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 12. Returns the array of uppercase strings from the specified array
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ]
//  => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ],
//   [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
 /*function getUpperCaseStrings(arr) {
    var caps = arr.map(elem => {
        return elem.toUpperCase();
    });
    return caps;
}
console.log(getUpperCaseStrings([ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]));*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 13. Inserts the item into specified array at specified index
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//   [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
//   [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function insertItem(arr, item, index) {
     arr.splice(index, 0,item);
return arr
} 
console.log(insertItem([ 1, 'b', 'c'],'x',0, 0));*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 14.  Returns the n last items of the specified array
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
//   [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* function getTail(arr, n) {
     return arr.slice(-n);
} console.log(getTail( [ 'a', 'b', 'c', 'd'], 3))*/
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 15. Returns every second item from the specified array:
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
//  [ 'a', 'b', 'c' , null ]  => [ "b", null ]
//  [ "a" ] => []
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
 /*function getSecondItems(arr) {
   let array = [];
    arr.filter((elem, index) => {
        if (index % 2 != 0)
            array.push(elem);
    });
    return array;
}
console.log(getSecondItems([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]))*/ 
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 16.  Returns a number of all occurences of the specified item in an array
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  [ 0, 0, 1, 1, 1, 2 ], 1 => 3
//   [ 1, 2, 3, 4, 5 ], 0 => 0
// [ 'a','b','c','c' ], 'c'=> 2
//   [ null, undefined, null ], null => 2
//  [ true, 0, 1, 'true' ], true => 1
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
 /*function findAllOccurences(arr, item) {
let numberOfRepeatedChars = 0;
    arr.filter(elem => {
        if (elem === item)
            numberOfRepeatedChars++;
    });
    return numberOfRepeatedChars;
} 
console.log(findAllOccurences([ 0, 0, 1, 1, 1, 2 ], 1)); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 17. Creates an array of integers from the specified start to end (inclusive)
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  1, 5  => [ 1, 2, 3, 4, 5 ]
//  -2, 2  => [ -2, -1, 0, 1, 2 ]
// 0, 100 => [ 0, 1, 2, ..., 100 ]
// 3, 3   => [ 3 ]
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
 /*function getIntervalArray(start, end) {
    let array = new Array(end - start + 1);
    array.fill(start);
    return array.map(elem => {
        elem = start;
        start = start + 1;
        return elem;
    });
} 
console.log(getIntervalArray(1, 15));*/
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// -------------       DATA TASKS    ------------------ //
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// 18.  Parses a rfc2822 string date representation into date value
//       For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  'December 17, 1995 03:24:00'    => Date()
// 'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
// 'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
 /*function parseDataFromRfc2822(value) {
    return Date.parse(value);
}
console.log(parseDataFromRfc2822('Tue, 26 Jan 2016 13:48:02 GMT'));*/
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// -------------       OBJECTS       ------------------ //
// ---------------------------------------------------- //



// ---------------------------------------------------- //
// 19.  Returns the rectagle object with width and height parameters and getArea() method
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
// const r = new Rectangle(10,20);
//  console.log(r.width);       // => 10
//  console.log(r.height);      // => 20
// console.log(r.getArea());   // => 200
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/* class Rectangle  {
  constructor (width , height)  {
      this.width = width;
      this.height = height;
  }
  getArea()  {
    return this.width * this.height;
  }
}
let r = new Rectangle(10, 5);
let area = r.getArea();

console.log("Width: " + r.width);
console.log("Height: " + r.height);
console.log("Area: " + area); */
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// 20.  Returns the 'Fizz','Buzz' or an original number using the following rules:
//       1) return original number
//        2) but if number multiples of three return 'Fizz'
//         3)  for the multiples of five return 'Buzz'
//        4) for numbers which are multiples of both three and five return 'FizzBuzz'
// ---------------------------------------------------- //
// EXAMPLE
// ---------------------------------------------------- //
//  2 =>  2
//   3 => 'Fizz'
//   5 => 'Buzz'
// 4 => 4
//  15 => 'FizzBuzz'
// 20 => 'Buzz'
//   21 => 'Fizz'
// ---------------------------------------------------- //
// YOUR ANSWER
// ---------------------------------------------------- //
/*function getFizzBuzz(num) {
    if (num % 5 == 0 && num % 3 == 0){
return'FizzBuzz'
} else if (num % 5 == 0 && num % 3 !==0){
return 'Buzz'
} else if ( num % 3 == 0 && num % 5 !== 0){
return'Fizz'
}else{
return num;
} 
}
console.log(getFizzBuzz(15));*/
// ---------------------------------------------------- //