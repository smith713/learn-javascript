// Console.log
/*
console.log("Hello World");
console.log(200);
console.log(true);
console.log(null);

var num = 50;
console.log(num);

console.log("string", 10.11, true, false, null, num);
*/

// Functions
/*
function makeCoffee(sugar, milk) {
  var instructions = "Boil water,";
  instructions += "pour into cup,";
  instructions += "add coffee granules,";
  instructions += "add " + sugar + " spoons of sugar,";
  instructions += " add " + milk + " % milk.";
  return instructions;
}

console.log(makeCoffee(2, 20));
console.log(makeCoffee(3, 2));
console.log(makeCoffee(1, 5));
*/

// Objects & Arrays
/*
var car = {
    color: "red",
    speed: 200,
    drive: function(){ 
        return "drive";
     },
    stop: function(){ 
        return "stop";
     }
}

var shoppinglist = ['Apple', 'Orange', 'Pear'];
*/

// Embedding Objects and Arrays
/*
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
}

var array = [
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ 
        return "drive"; 
    }
];
*/

// Member Access
/*
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

var array = [
  "string",
  100,
  ["embed", 200],
  { car: "ford" },
  function() {
    return "drive";
  }
];
*/

// Callable Objects
/*
function name() 
{
    var fullName = "Latoyya Smith";

    function concat( name )
    {
        return "MISS. " + name;
    }

    return concat(fullName);
}

function name( fullname ) 
{
    return fullname();
}

> console.log( name ( function(){ return "embed"; } ) );
*/

// Scope and Closures
/*
var engine = {
    maker: "Ford",
    headGasket: {
        pots: [
            "piston1",
            "piston2"
        ]
    }
}

function runExpression(){

    var a = 10;

    function add()
    {
        return a + 90;
    }

    return add();
}
*/

// This

// console.log( this );
/*
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
*/

// Constructors
/*
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
*/

// COnstructors & Prototypes
/*
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
*/

// if Statements
/*
var carsLeft = 0,
  carsRight = 0,
  greenMan = "yes";

if (greenMan === "yes") 
{
    console.log("cross the road");
}*/

/*
var carsLeft = 0,
  carsRight = 0,
  greenMan = "no";

if (greenMan === "yes"){
    console.log("cross the road");
}else if(carsLeft === 0 ){
    console.log("All clear! Cross the road");
}else{
    console.log("Stay where you are");
}
*/

/*
var carsLeft = 1,
  carsRight = 0,
  greenMan = "no";

if (greenMan === "yes"){
    console.log("cross the road");
}else if(carsLeft === 0 ){
    console.log("All clear! Cross the road");
}else{
    console.log("Stay where you are");
}
*/

/*
// AND (&&)
var carsLeft = 1,
  carsRight = 0,
  greenMan = "no";

if (greenMan === "yes"){
    console.log("cross the road");
}else if(carsLeft === 0 && carsRight === 0){
    console.log("All clear! Cross the road");
}else{
    console.log("Stay where you are");
}
*/

/*
// OR (||)
var carsLeft = 1,
  carsRight = 0,
  greenMan = "no";

if (greenMan === "yes"){
    console.log("cross the road");
}else if(carsLeft === 0 || carsRight === 0){
    console.log("All clear! Cross the road");
}else{
    console.log("Stay where you are");
}
*/

/*
// Multiple operators
var carsLeft = 1,
  carsRight = 0,
  greenMan = "no";

if (greenMan === "yes"){
    console.log("cross the road");
}else if(greenMan === "yes" && carsLeft === 0 || carsRight === 0){
    console.log("All clear! Cross the road");
}else{
    console.log("Stay where you are");
}
*/

/*
// Use parenthesis to change precededce
var carsLeft = 1,
  carsRight = 0,
  greenMan = "no";

if (greenMan === "yes"){
    console.log("cross the road");
}else if(greenMan === "yes" && (carsLeft === 0 || carsRight === 0)){
    console.log("All clear! Cross the road");
}else{
    console.log("Stay where you are");
}
*/

// For and For in Loops
/*
var classRegister = [ "Lawrence", "John", "Jeff"];

// console.log(classRegister[0]);
// console.log(classRegister[1]);
// console.log(classRegister[2]);

for (var i = 0; i < classRegister.length; i++){
    console.log(classRegister[i]);
}

// Reverse

for (var i = classRegister.length - 1; i >=0; i--){
    console.log(classRegister[i]);
}
*/

/*
// For In
var classRegister = ["Lawrence", "John", "Jeff"];

for(var index in classRegister){
    console.log(classRegister[index]);
}
*/

// Changing Element's Content
/*
console.log(document.getElementById('hello'));

console.dir(document.getElementById('hello'));

console.log(document.getElementById('hello').innerText = " new world");

console.log(document.getElementById('hello').innerText += " order");

var pHello = document.getElementById('hello');

pHello.innerHTML += " order <span>hello world</span>";

var spanH1 = document.querySelectorAll('h1 span');

spanH1[0].innerHTML = 'New Text Here';
*/

//Changing Element Styles
/*
var el = document.getElementById('style');

// el.style.background = 'blue';
// el.style.color = 'white';
// el.style.width = '200px';

el.style.cssText = "background:blue; color:white; width:200px";

el.style.cssText += " height:100px";*/

// Event Handlers
/*var select = document.getElementsByName('cars')[0];

select.onclick = function(event){
    console.log(event);
};

// select.addEventListener('click', function(event){
//     console.log('clicked by event listener');
// });

function ClickCallback(event){
    console.log('clicked by add event listener')
}

select.addEventListener('click', ClickCallback);

select.removeEventListener('click', ClickCallback);*/

// Create & appendChild & insertBefore method's
/*
var element = document.createElement('div');

element.style.cssText = "width:200px; height:20px; background:blue";

element.onclick = function(){ alert('hello'); };

// document.body.appendChild(element);

var target = document.getElementById('yellow');

document.body.insertBefore( element, target );*/

// FINAL PROJECT

// let elements = document.getElementsByName('cssProperty');

// let div = document.getElementById("modify");

// function set() {
//   for (let index = 0; index < elements.length; index++) {
//     let cssProperty = elements[index].getAttribute("id");

//     let cssValue = elements[index].value;

//     div.style[cssProperty] = cssValue;
//   }
// }
// document.getElementById("set").addEventListener("click", set);
