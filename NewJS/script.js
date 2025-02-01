
document.write("hi vinay");
//console.alert("This is first warning");
let a=5,b=0;
if(b==0){
    console.error("This is error: dividend cannot be zero");
}
else {
    console.log(a/b);
}
// objects as Table form using console
const car1 = {name:"Audi", model:"A4"}
const car2 = {name:"Volvo", model:"XC90"}
const car3 = {name:"Ford", model:"Fusion"}

console.table([car1, car2, car3]); // here putting them in the array;
// writing as array in the table console 
console.table(["vinay",20,"sen","Rewa"]);


// Grouping the console ouptput
console.group("First Group");
// console.table([car1,car2]);
console.error("Temp error");
console.warn("Practice warning");
console.groupEnd("Bye Bye");


// putting css on the console
console.log("%cCustom CSS console", "background-color:white; padding: 10px;color:blue; font-size: 20px;");


// const variable
//const x= 10;
  // x=20; // this will give error as const variable cannot be changed
//but if we use const object then we can change the value of object
const car = {name:"Audi", model:"A4"};
console.log("before changing the value of const object", car);
car.name ="Volvo";
console.log("After changing the value of const object", car);


// type conversion
// -- here if the value is passed in the form of string then it will be converted to number
// by using
let k='100';
console.log("type of k before conversion", typeof k);
//  k= parseInt(k);
 k= +k; // this will also convert the string to number
//  k= Number(k); // this will also convert the string to number
console.log('type of k after parseInt conversion',k, typeof k);

// now converting back to string 
k= String(k);
// k= k.toString();
console.log('type of k after converting back to string',k, typeof k);

// converting to string to float
let am = '58.5';
am= parseFloat(am); // parseInt(am)= 58
console.log('type of am after converting to float',am, typeof am); // type number but print 58.5 since only one data type for numbers in js


