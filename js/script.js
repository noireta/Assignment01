// 1. convert the following highlighted identifiers to camel case notation.
 let some_month;
 let someMonth;          // camel case
 function theMonth();    // camel case
 let current_month;
 let currentMoth;        // camel case
 let summer_month;
 let summerMonth;        // camel case
 let MyLibraryfunction
 let myLibraryFunction;  // camel case

 // 2.Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

 20.05                   //  Numeric literal expression.
 "world!"               // String literal expression.
  true                 // Boolean literal expression.
  null                // Null literal expression.

// 3.Give me two examples of complex / variable expressions.
'hello';
'hello' + 'world';  // evaluates to the string 'hello world'

 10 > 9;             // evaluates to boolean value true

 // 4. Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
 
strfirstName          // no changable 
strlastName           // no changable 
strAddress            // no changable 
strCity               // no changable 
strState              // no changable 
strZipCode            // no changable 
numAge                // increase 
numWalkStep           // increase 
numShoppingList       // increase 

// 5.Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.

var a = 7, b = 10, c = 11;                            // declaring and assigning

var roll;                                             // declaring and assigning
roll = 20;

const price;                                          //declaring and assigning
price = 203;

let myName;                                           // declaring and assigning
let isInstudent;
let myName = "Noireta Roy";
isInstudent = true;

let myName = "Noireta Roy";                          //declaring and assigning
let isInstudent = true;

let myName = "Noireta Roy", isInstudent = true;      //declaring and assigning

// 6.Create a variable. Add a number and a string and display the coerced result in the browser’s console window. 

var name = "bikin";
var age = 26;
console.log( name + age)                            //  coerced result "bikin26"

var marks = "24";
var age   =  27;
console.log(marks + age)                           //  coerced result "2427"

//7.Create two variables. For the first variable, add a Boolean and a string and display the coerced result. For the second variable, add a number and a Boolean and display the coerced result. 

var part1;                                          //  Boolean and a string and display the coerced result.
part1 = true + "abcd";
console.log(part1);

var homeAddress;                                    //add a number and a Boolean and display the coerced result.
homeAddress = 67589 + true;
console.log(homeAddress);

//8.Is the following string literal valid? If not, how would you fix it?

let someString = "Who once said, Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.";
window.console.log(someString);               // fixed


//9.	Create a variable that produces a null value in the console window.Then, create a variable that produces an undefined value in the console window.

let totalPrice = null;              //Create a variable that produces a null value
console.log(totalPrice);

let carDetails = undefined;          //Create a variable that produces a undefined value
console.log(carDetails);

// 10.Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

console.log(typeof "hello");         // string

console.log(typeof 6);               // number

console.log(typeof true);            // Boolean

console.log(typeof [1,2,3.5]);       // object

console.log(typeof undefined);       // undefined

// 11.Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
//Hello Zak Ruvalcaba, welcome to the JavaScript class!
//Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.

alert("Hello " + "Noireta Roy" + ", Wellcome to the JavaScript Class!");    //concatenation operator


//12.	Declare a variable called name and set it equal to your name.Substitute your name in the previous alert string with the variable instead.

let Name = "Noireta Roy";                                                   //alert string with the variable instead.
alert(`Hello  ${Name}  Wellcome to the JavaScript Class!`);

// 13.	Declare a variable called course and set it equal to “JavaScript”.Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

let course = "JavaScript";                                                 //alert string so that it displays
alert(course);

//14.	Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

let Name = "Noireta Roy.";                                                  
alert(`Hello  ${Name} \n Wellcome to the JavaScript Class!`);              //line break is added right

// 15.Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 

var name = prompt ("what is your name");                                //prompt that asks the user for their name.

// 16.	Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

course = prompt ("what class are you taking");                         //prompt that asks the user for their course.
console.log(course)
alert(`wellcome to course ${course} the JavaScript`);

//17.	Declare a variable called x and assign it a value of 10.Declare a variable called y and assign it a value of 20.Display the sum of those two numbers in the console window. 
 
let x = 10;                                                             //Display the sum of those two numbers in the console window. 
let y = 20;
console.log(x + y); 

//18.	Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable and display the result in the console window.The result should be 40.

let x = 20;                                                        //display the result in the console window.
    x = x + 20;
console.log(x);

//19.	Declare a variable called x and assign it a value of 20.Multiply and assign 5 to that variable and display the result in the console window. The result should be 100.

var x = 20;                                                        //display the result in the console window. The result is 100.
    x *= 5;
console.log(x);

//20.	Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.Divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.

var x = 20;                                                      //display the result in the console window. The result is 2.
x = 20 % 3;
x /= 1;
console.log(x);

//21.	Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

let age = 19;                                                   // displays the result within the console window.
console.log((age > 18) &&( age < 65))

// 22.Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

let course = "AWS";                                            //displays the result within the console window.
      x = (course == "JavaScript");
      y = (course == "Sass");
      console.log( x || y );