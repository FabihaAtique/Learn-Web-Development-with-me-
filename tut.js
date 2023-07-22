console.log("hello world");
//i have to write the same line again and again if i want the line to be printed for different names 
let name1 ='fabiha'; //global scope 
let name2 = 'saad'; 
let name3 = 'khan';
console.log(name1 + " is a good person ");
console.log(name2 + " is a good person ");
console.log(name3 + " is a good person ");
console.log('\n');


//writing the line once in the function and using it to print different names 
//code reusable now 
function greet(name, greettext= "default greet text"){ //the passed greettext value will be printed on the console, if no value is passed then this default value will be printed 
    let name1 = 'name1'; //this name1 is only local to this function, it wouldnt change the name1 outside 
    console.log(greettext + " ");
    console.log(name + " is a good person ");
}
let greettext = "good morning "
greet(name1, greettext);
greet(name2, greettext);
greet(name3); //default greettext will be shown now 

//a function can resturn something too 
function sum(a,b,c){
    let d = a+b+c;
    return d; 
}

let returnsum = sum(2,4,5);
console.log(returnsum);

