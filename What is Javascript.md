## What is Javascript

Created in 10 days in 1995 by Brenden Ike.

### Other Names
1. LiveScript - Release name (before becoming Javascript)
2. Mocha - Development code name (Netscape)
3. JScript - Microsoft version of Javascript
4. ECMAScript - Standarized version of Javascript

All the languages are the same the same but the dirrerent names are trademarked by individual companies. 

Java and Javascript are unreleated


### How Javascript works

Computers only understand machine code (binary)

Broweser has 3 main areas

 Rendering Engine                 Javascript Engine
 -----------------                ------------------
 DOM parser - HTML                    JavaScript
     CSS parser                 (convert code to binary)

### Javascript Console
Simple text interface that allows you to input and output commands.
Allows you to look at basic input and output text from a command

-Windows: Command Prompt
-Mac: Terminal
-Javascript console allows you to interact with the JIT compiler
--- Jit compiler converts human readable code to machine code

-Console is beneficial in debugging
-To open the Javascript console open developers too and navigate to the console tab
--- Chrome: Right click in browser -> Inspect Element -> console tab
--- FireFox: Right click in browser -> Inspect Element
--- Safari: Safari -> Preferences -> Enable developer tools -> Right click --> Inspect Elements
--- IE: F12

### Objects in Javascript
Programs can only contain Nouns, Adjectives, and Verbs

Nouns - descriptive properties
Adjectives- describes a noun
Verbs- Actions (functions)

Functions in a object or called methods

Embeded objects - objects inside of objects (Hierachy)
Encapsulation - grouping data together

### Javascript Syntax
Syntax - the way a program language is written

API(Application Program Interface) - A collection of function and properties
--Embeded API - API encapsulated inside of other API's

Everything goes into the window object (Type window in console)
--Each webpage had its own window object

### Primitive Data
-Basic Data

#### String 
wrapped in single or double quotes
```
"hello world" 
```
#### Escape chracter  
place a backslash (\) before the character you want to escape or mix and match quotes ("" and  '')

#### Number
-Whole Integers (1, 200, -3)
-Floating Points (fractions)

#### Booleans
true
false

Null - empty
Undefined - not defined

NaN - Not a number

#### Variables, Constants & Assignments
To create a variable use the var keyword (reserves a location in memory).
Variables can be any of the primitive data types.
Variable declerations end in a semi-colon (;),

```
> var name =  'Latoyya';
> name;  
"Latoyya"
```
---- Assign what is on the right to the variable on the left;

Variables should not start with a number, capital letters or special characters. Never use spaces or strings when naming variables.

#### To re-assign a variable

```
> name = "Toyya"
> name;   
"Toyya"
```

#### Variables can be declared without being initalized (waiting for data)
```
> var car;
```
variables and constants are a way of fetching data out of memory

-Javascript is a loosly typed language
-- variables are not constrained to one data type

-Constants (const) always stays the same throughout the life of the program (can't be reassigned).
-must be decalred and initalized (unlike variables) cant be later assigned.

```
const lastname = 'Smith'
```
Declared variables, constants and other symbols (functions) related to the window objects can be found in the symbols table (database)

### Arithmetic Operator's
Operators - a predefined function for the language in the JIT complier (task)
Function - a subroutine 

-- Many operators can be in one statement
-- Operators have a order of precedence (P E MD AS or B O DM AS) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 

```
5 + 2 * 3 
5 + 6
11

Math.pow(2,4) / 2 + 1 - 5 + (2 * 12);
Math.pow(2,4) / 2 + 1 - 5 + 24
           16 / 2 + 1 - 5 + 24
           8 + 1 - 5 + 24
           9 - 5 + 24
           4 + 24
           28
```
Modulus Division (Remainder division) - returns the remainder
good for finding odd and even numbers

```
9 % 5 = 4
10 % 2 = 0
```
### Assignment Operators
Takes the value on the right and assigns it to the variable on the left

```
var number = 20;

number = 30; <- Reassigns number to the value of 30

number += 30; <- Add 30 to the existing value of number and assign that value to number (number = 60)

number -= 30; <- Subtracts 30 from the existing value of number and assign that value to number (number = 30)

number *= 30; <- Multiply 30 to the existing value of number and assign that value to number (number = 900)

number /= 30; <- Divide 30 from the existing value of number and assign that value to number (number = 30)

number %= 4; <- Modulus 4 from the existing value of number and assign that value to number (number = 2)

number **= 4; <- Raise the existing value of number to the 4th power and assign that value to number (number = 16)
```

#### Concatenate (+) - Joins strings together
```
Two Strings
------------
> "Latoyya" + " Smith";
"Latoyya Smith"

String and a number
-------------------
> "Latoyya" + 10;
"Latoyya10"

Polymorphism - converts the number to a string (string always takes precedence)

> var name = "Bill";
> name;
"Bill"  

> name += " Gates"
"Bill Gates"
```

### Code Editors & Debugging
IDE (Intergrated Development Environment)
Allows you to edit code

-Javascript can be wrote inline (between script tags) or in an external .js file and linked at the bottom of the body tags(recommended)

-- Good idea to place script take in the bottom of the body tag to give the HTML the chance to load and not be held up by Javascript while its loading (block-loading)

console.log() - can be used as a debugging tool
-- Parenthesis invokes a functions

```
console.log('Hello World');
console.log(200);
console.log(true);
console.log(null);

var num = 50;
console.log(num);

console.log('string', 10.11, true, false, num); <- multiple values
```

### Functions or subroutines
Tasks defined by a set of instructions that can be run at a certain point in time.

-- Functions are adaptable (ability to change)

```
Function Definition
--------------------
function makeCoffee(sugar, milk) {
  var instructions = "Boil water,";
  instructions += "pour into cup,";
  instructions += "add coffee granules,";
  instructions += "add " + sugar + " spoons of sugar,";
  instructions += "add " + milk + " % milk.";
  return instructions;
}


Invoke Function (Call)
----------------------
makeCoffee(2, 20)
makeCoffee(3, 2)
makeCoffee(1, 5)
```

-Function definition has parameters
-Function calls have arguements

-Arguements are passed to the parameters
-Parameters are cleaned after they are used to free memory for the next time the function is called

-- Variables created inside are locally scoped (deleted after the function returns)

### Objects and Arrays
-Programs typically represent objects in the real world

- Objects are obvious in life 
- Everything is grouped in curly braces
-- NOUNS and ADJECTIVES describe the properties (key value pair)
-- VERBS perform an action

--- NOUN = key :: ADJECTIVES = value
--- VERBS = methods (function or subroutine in an object)

```
var Car = {
    color: "red",
    speed: 165,
    maker: "Volvo",
    drive: function(){ ... },
    stop: function(){ ... }
}
```

Arrays - a list of objects (list of todo, shopping list, attendance)

Arrays elements are enclosed in square brackets.
Arrays are 0 indexed
In JS whenever you modify an array the key names are automatically updated.

```
> var arr = ['Apple', 'Orange', 'Pear'];
```

### Embedding Objects & Arrays

Objects can contain other objects
- A hiearchy is create (many objects can be embedded)

```
var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petro",
        pistons: ["pistons1", "pistons2"]
    },
    drive: function(){ 
        return "drive";
    }
};
```

Objects can embed arrays, and arrays can embed objects
- Objects can have name functions called methods
- Functions in arrays are not named but or numbered.

### Member Access (.)
Accessing specific members inside of an object

```
var car = {
  make: "volvo",
  speed: 160,
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "petro",
    pistons: [
        { maker: "BMW" },
        { maker: "BMW2" }
    ]
  },
  drive: function() {
    return "drive";
  }
};
```
To access the value of a particular property use the member access operator (.)

```
> car.make;
"volvo"

> car.engine.make;
"bmw"
```
To invoke a method by placing () at the end

```
> car.drive();
"drive"
```

### Computed Member Access
- Use brackets to access a member
- Never use . and [] consecutively but can be mixed and matched


```
> car.engine.pistons[0];
{maker: "BMW"}

> car.engine.pistons[0].maker;
"BMW"
```
```
var array = [
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ 
        return "drive"; 
    }
];
```

To invoke a function with computed access method and parenthesis to the end

```
> array[4]();
"drive"
```

Whatever is in the brackets will be treated as a statement

array[1 + 1 - 2]   ===   array[0]

```
> array[1+1-2];
"string"

> array[0];
"string"
```

Variables can be used to access members

```
> var a = 6;

> array[a - 3];
{car: "ford"}

```

When  accessing things with computer member access be sure to wrap the key in quotes

```
> car["make"]
"volvo"

> car["engine"]
{size: 2, make: "bmw", fuel: "petro", pistons: Array(2)}

> car["engine"]["pistons"]
(2) [{…}, {…}]
    0: {maker: "BMW"}
    1: {maker: "BMW2"}
    length: 2

> car["engine"]["pistons"][1]
{maker: "BMW2"}

>car["engine"]["pistons"][1]["maker"]
"BMW2"
```
Assign the key to a variable

```
> var pointer = 'make';
> car[pointer];
"volvo"
```

### Member creation, assignment, and deletion
To change the value of a property
```
> car.make = "ford";
```

All assignment operators will work


```
> car ["speed"] *=2;
320

> car
{make: "ford", speed: 320, engine: {…}, drive: ƒ}
```
 To create a new key (new symbol name) just assign a value to a key as if it already exists. A key name must be assigned a value at creation

 ```
> car.model = "v60";
```

To create new methods
 
```
> car.stop = function() {
    return "stop";
}
```

Nested objects can have methods added in a similiar way

```
> car.engine.stop = function() {
    return "stop engine";
};
```

Delete properties

```
> delete.car.color;
```

Delete methods

```
> delete.car.stop
```

### Array Modification

var array = [
  "string",
  100,
  ["embed", 200],
  { car: "ford" },
  function() {
    return "drive";
  }
];

-- Array's are 0 indexed

To return an element stored at a specific index
```
> array[0];
"string"
```

To assign a new value to an element use the assignment operatot
```
> array[0] = "new string";
```

Other assignment operators can be used as well
(+=, -=, /=) will assign NaN

```
> array[0] += " concat";
```

Creating a new element in the array
-- if you know how many elements (if you assign an index to an element that is not the the next index all unoccuppied indexes will be assigned the value of undefined )

```
> array[5] = "new string";  
(6) ["string", 100, Array(2), {…}, ƒ, "new string"]   

> array[20] = 2020;   
(21) ["string", 100, Array(2), {…}, ƒ, "new string", empty × 14, 2020]
```
Be careful when modifiying arrays with [] and . because you can easily assign a string as the key when in actuality array keys should be numbers

Arrays have a length property that tells us how many elements are in the array that updates dynamically

```
> array.length;

Remove and return the first element an array
> array.shift();

Pop and return element from end of the array
> array.pop();

Add new elements to the beginning of the array (as many as you like, can be any primitive type, array or object). Returns the length of the array
> array.unshift("string", 20, 20.22, function(){}, {}, []);

Add new elements to the end of the array (as many as you like, can be any primitive type, array or object). Returns the length of the array
> array.push(200, "push");
```

Remove elements in between elements by using splice. Returns an array of what was deleted. array.splice(start, how many to delete)
```
> array.splice(2, 2)
```

Add elements in between elements by using splice. Returns an array of what was deleted.
array.splice(start, how many to delete, elements to add);
```
> array.splice(1, 0, "hello", "world", 200)
```
Replace elements in between elements by using splice. Returns an array of what was deleted. Elements will be added starting from where the delete happened
array.splice(start, how many to delete, elements to add);
```
> array.splice(1, 2, "hello", "world", 200)
```

### Callable Objects
- {} - object literal
- Functions are callable Objects
- Arrays are callable Objects
- Callable objects can be nested in one another

```
function name() 
{
    var fullName = "Latoyya Smith";

    function concat( name ){
        return "MISS." + name;
    }

    return concat(fullName);
}
```
1.) name() invokes the function
2.) Latoyya Smith is assigned to the fullName variable
3.) concat function is skipped because it hasn't been invoked
4.) concat function in invoked and passed the fullName variable (which contains Latoyya Smith).
5.) concat function return "MISS Latoyya Smith


Have a parameter receive an object
```
function name( fullname ) 
{
    return fullname.firstname + fullname.lastname;

}

> console.log( name( { firstname:"Latoyya", lastname:" Smith"} ));
Latoyya Smith
```
A callable object being passed as a parameter doesn't need a name
-Returns a callable object

```
function name( fullname ) 
{
    return fullname();
}

> console.log( name ( function(){ return "embed"; } ) );
embed
```

### Memory Hoisting 
Hosting - To raise up
During the compile phase the JIT goes through the code line by line and host symbol names, callable objects


```
console.log(myName, printName() );

var myName = "Latoyya";

function printName()
{
    return "John Doe";
}
```

### Scope and Closures
--- Scope = Access to nested objects
--- Braces {} provide scope

```
var engine = {
    maker: "Ford",
    headGasket: {
        pots: [
            "piston1",
            "piston2"
        ]
    }
}

> engine;
{maker: "Ford", headGasket: {…}}

> engine.pots
undefined

> engine.maker
"Ford"

> engine.headGasket
{pots: Array(2)}

> engine.headGasket.pots
(2) ["piston1", "piston2"]

> engine.headGasket.pots[2]
undefined

> engine.headGasket.pots[1]
"piston2"

> engine.headGasket.pots[0]
"piston1"
```


Callable objects go onto an execution stack
Closure

```
function runExpression(){

    var a = 10;

    function add()
    {
        var b = 90;

        return a + b;
    }

    return add();
}
```

1.) The runExpression() is placed on the exection stack
--- runExpression() creates the symbol a
2.) The add() is placed on the exection stack
--- Checks to see if another callable object can access the symbol a if so it leaves it in memory (closure)
3.) add() creates the symbol b 
4.) add() returns the result of a + b

When finish, garbage collection (delete from memory) is done because no other part of the applicaton can access what's in the scope of the function.

### Inferred Global & Scope
The window object is the highest level objects and all the symbols attached to it are globally scoped meaning they can be accessed anywhere in the script

Inferred Global - deduce of conclude where a memory pointer is. Goes all the way up to the window scope until it finds it.

Naming collusion are avoided by scope.

To avoid changing a global scope use the const or var keywords on the new variable

Using the assigmnet operator on a variable without the var or const keywords will assign the string on the right to the window object.

### This kryword Context
Depending on where you use the this keyword it will have a different pointer in memory.

this refers to the object or array that invoked it

```
var object = {
    prop: this,
    methods: function(){ return this }
};

var array = [
    this,
    function(){ return this; }
];

function global(){
    return this;
}

global.call( object );
```

this by default points to the window object
--- if you have the this keyword as a property in a object or an element in an array it points to the window object

```
> object.prop;
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
> array[0];
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
```

Callable objects changes the "this" context (steps out 1 into the outer scope).

```
> object.methods();
{prop: Window, methods: ƒ}

> array[1]();
(2) [Window, ƒ]0: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}1: ƒ ()length: 2__proto__: Array(0)

> global();
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
```

Invoke functions
--- global();
--- globale.call( object );
--- new global(); <-- adds a new context (blank object)

### Constructors
Functions template
- has a capital letter
- each instance is a copy making them unique and changable to how it is needed

```
function Apple( x, y, color, score )
{   
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}

var apple1 = new Apple( 10, 20, "red", 200 );
var apple2 = new Apple( 100, 200, "green", 50 );
var apple3 = new Apple( 20, 200, "pink", 10 );
```

### Prototypes
Unique to Javascript
- Shared objects (properties and methods can be accessed by a range of differnt objects deending on its constructor).
- Things that are not unique but common in difference instances are put into Prototypes.
- When invoked the function properties is scanned for the method, if it is not found the prototype is scanned. (Saves memory)
- this keywords refers to the instance that invoked it

Apple1
{
    color: "red",
    weight: 22
} 

Apple2
{
    color: "green",
    weight: 12
} 

Apple3
{
    color: "purple",
    weight: 55
} 

Apple.prototype = {
    eat(),
    throw()
}

### Constructoes with Prototypes
Any member of the prototype constructor is accessible from the instance it was made.
- Only have to modify onw section

```
function Apple( color, weight )
{   
    this.color = color;
    this.weight = weight;
    // this.eat = function(){ return "eat the apple"; };
    // this.throw = function(){ return "throw the apple"; };
}

Apple.prototype = {
    eat: function(){ return "eat the apple"; },
    throw: function(){ return "throw the apple"; }
}

var apple1 = new Apple("red", 99);
var apple2 = new Apple("green", 109);
var apple3 = new Apple("yellow", 299);

> apple1.eat();
"eat the apple"

> apple2.eat();
"eat the apple"

> apple3.eat();
"eat the apple"

> apple1.throw();
"throw the apple"

> apple2.throw();
"throw the apple"

> apple3.throw();
"throw the apple"
```

### this. Constructors & Prototype
- this points to the instance with the initial invoke ans not the prototype (goes up the chain)

```
function Apple( color, weight )
{   
    this.color = color;
    this.weight = weight;
    // this.eat = function(){ return "eat the apple"; };
    // this.throw = function(){ return "throw the apple"; };
}

Apple.prototype = {
    eat: function(){ return this },
    throw: function(){ return "throw the apple"; }
}

var apple1 = new Apple("red", 99);
var apple2 = new Apple("green", 109);
var apple3 = new Apple("yellow", 299);

> apple1.eat();
Apple {color: "red", weight: 99}

> apple2.eat();
Apple {color: "green", weight: 109}

> apple3.eat();
Apple {color: "yellow", weight: 299}
```

### Comparsion Operators
Asking questions

== compares what's on the left to what's on the right (case sensitive). String, bool, integer, float, null, undefined
***NaN is not equal to NaN

```
> 10 == 100;
false

> "hello" == "hello"
true
```

#### Polymorphism
Strings take presedence because strings can contain letters and numbers
```
> null == undefined
true

> 10 == "10";
true
```

!= (Not Equal) Checks if values are not equal
```
> null != null;
false

> null != undefined;
false

> 10 != 100;
true

> 10 != "10";
false
```
### Strictly Comparison Operators

=== checks the value and data type (Strickly Equal)
```
> null === undefined
false

> 10 === "10"
false
```

!== checks the value and data type (Strickly Not Equal)
```
> null !== undefined
true

> 10 !== "10"
true
```
### Greater Than
```
> 10 > 100;
false

> 10 > 1;
true

> "hello" > "hello";
false

> "helloooo" > "hello";
true
```
### Greater Than and Equal Too

```
> 10 >= 10;
true
```

### Less Than
```
> 10 < 100;
true

> 10 < 1;
false

> "hello" < "hello";
false

> "helloooo" < "hello";
true
```

### Less Than and Equal Too
```
> 10 <= 10;
true
```

### if Statements

if(condition)
{
    do something...
}

if conditon is true do something

if(condition)
{
    do something...
} else if(condition) {
    do something...
}

if else/if needs a condition

if(condition)
{
    do something...
} else if(condition) {
    do something...
} else {
    do something...
}

if else/if else (else doesn't need a condition)

You can change multiple operators

OR (||) - either conditon must evaluate to true to be true
AND (&&) - both conditons must be true to be true

Use parenthesis to change the order of precedence of comparisons operators


### For and For in Loops
Loops allow reputation

Items in an array can be printed out individually one by one
```
var classRegister = [ "Lawrence", "John", "Jeff"];

console.log(classRegister[0]);
console.log(classRegister[1]);
console.log(classRegister[2]);
```
This way is not DRY (Don't Repeat Yourself) and the array can change over time. A loop will be the recommended way.

```
for(index; conditon; increment){
    do something...
}

var classRegister = [ "Lawrence", "John", "Jeff"];

for (var i = 0; i < classRegister.length; i++){
    console.log(classRegister[i]);
}
```

Decrement (Reverse the list)
```
var classRegister = [ "Lawrence", "John", "Jeff"];

for (var i = classRegister.length - 1; i >=0; i--){
    console.log(classRegister[i]);
}
```

#### For in
used with increment (automatically increment)

```
for(var index in classRegister){
    console.log(classRegister[index]);
}
```

### Let ES6
let has more respect to scope they reside in and new values can be assigned
const can not be reassigned

var symbolName = "value reference in memory";

let letSymbol = "scoped value";

const symName = "constant value in memory";

*** USE LET AND CONST not var ***
var does not respect the scope

### Understanding the Document Object Model (DOM)
-Object structure represention
document object is the document itself thats seen in the browser and is part of the window object


### Targeting DOM elements
- Can be accessed by going manually through the directory structure of the DOM (Not the best way) as items are added the index changes

```
> dir(document.childNodes[1].childNodes[2]);
```
Use prototype selectors 
Targets all paragraphs in the document (returns them in an array)
```
> document.getElementByTagName('p');
```
Target elements by Id (returns the HTML)
```
> document.getElementById('hello');

Target elements by Id (returns the object)
```
> dir( document.getElementById('hello'));
```

Grab several objects with a specific classname (Elements returns an array)
```
> document.getElementsById('pClass'));
OR
> dir(document.getElementsByClassName('pClass'));
```

You can use CSS Selectors to target DOM elements (returns array)
```
> document.querySelectorAll('#hello');

> document.querySelectorAll('.pClass');

> document.querySelectorAll('#hello, .pClass');

> document.querySelectorAll(' p[data-content="123"], body > h1.pClass > span ');
NodeList(2) [p, span]

### Changing Element's Content
- It's best to place javascript files at the end of the body tag because if the javascript file is large the rest of the page (HTML and CSS) will have to wait on it to load before it is loaded. 
- Ready for modifications of elements


- View HTML and the actual object
```
> document.getElementById('hello');

> dir(docum.getElementById('hello');
```

- Change and concatnate the text

```
> document.getElementById('hello').innerText = " new world";

> document.getElementById('hello').innerText += " order";
```

To avoid typing the target of the element over and over set it to a variable like:

> var pHello = document.getElementById('hello);

> pHello.innerText = "new world";

> pHello.innerText += " order";

innerText - for the text that is presented to the user (No HTML)
innerHTML - allows you to add HTML tags

> pHello.innerHTML += " order <span>hello world</span>;


Target HTML 
```
> var spanH1 = document.querySelectorAll('h1 span');

> spanH1[0].innerHTML = 'New Text Here';
```

### Changing Element Styles
Styles can be changed in Javascript as it can in CSS. (Modify the style attribute)
-Target an elemnet by Id or class

```
var el = document.getElementById('style');

el.style.background = 'blue';
el.style.color = 'white';
el.style.width = '200px';
```
All values are entered as strings

Use cssText to chain style elements together 
```
> el.style.cssText = "background:blue; color:white; width:200px";
```

To append to css (+=)
```
el.style.cssText += " height:200px";
```

Access pre-defined styles (computed styles). Return elements of computed styles
```
> getComputedStyle(el);
```
Override styles by using !important

### Event Handlers
Events - when something happens in an application and you want todo something (mouse click, button press, screen touch)

Inline Events (Not Recommended) want js in a external file to allow for more than one subroutine

```
<select name="cars" onclick="console.log('You Clicked Me')">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </select>
```

Use addEventListerner to get an event
```
select.addEventListener('click', function(event){
    console.log('clicked by event listener');
});
```

Remove event listerner (Targer the element)
To remove a event make sure the function not anynomous

```
function ClickCallback(event){
    console.log('clicked by add event listener')
}

select.addEventListener('click', ClickCallback);

select.removeEventListener('click', ClickCallback);
```

### Create & appendChild & insertBefore method's

- AppendChild
```
var element = document.createElement('div');

element.style.cssText = "width:200px; height:20px; background:blue";

element.onclick = function(){ alert('hello'); };

// document.body.appendChild(element);
```

- Insert Before
```
var target = document.getElementById('yellow');

document.body.insertBefore( element, target );
```

