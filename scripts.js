console.log("Hello");

// variables
// 'let' is used to say that it is variable

let a=12;
let b=3;

// camelcase variable
let ageOfAPerson=45;    

// let a=34
// variable name shouls note be repeated again

console.log("a");
console.log(a);

//consants

const number4=78;
console.log(number4);

//operators
//arithetic operators like  +,-,*,/,%

let v=4;
let p=5;
console.log(v-p);
console.log(v+p);
console.log(v*p);
console.log(v/p);
console.log(v%p); // gives remainder
// ** is power
console.log(v**p);

// assignments operators =,+=,-=,*=,/=,%=,**=

let h=3;
h=h+2;
console.log(h);

h+=2;
console.log(h);
h-=3;
console.log(h);
h*=4;
console.log(h);
h/=7;
console.log(h);
h%=4;
console.log(h);
h**=2;
console.log(h);

// comparision operstors ==,===,!=,<,>,<=,>=

let y=5;
let t=5;
console.log(y==t); //returns true or false

let sample1=33;
let sample2="33";
console.log(sample1==sample2) //answer is true ,beacuse it checks only values not data types
console.log(sample1===sample2) //checks data types also
// console returns string

let z=5;
let l=5;
console.log(z!=l);

let o=5;
let k=7;
console.log(o<k);

let i=8;
let j=5;
console.log(i>j);

let m=8;
let n=5;
console.log(m>=n);

let r=8;
let q=5;
console.log(r<=q);

// data types-string,number,boolean

let numbers=12;
let alphabet="a";
let alphabet1="car";
let boolean=true;

//strings

jk="sai";
gh="shaRan";
console.log(jk+" "+gh);
console.log(jk.length);
console.log(jk.toUpperCase());
console.log(gh.toLowerCase());
console.log(jk.concat(gh));
console.log(jk.indexOf("i"));
console.log(jk.slice(0,1));
console.log(jk.substring(0,1));
console.log(jk.substr(0,1));
console.log(jk.replace("a","i"));
console.log(jk.replaceAll("a","i"));
console.log(jk.trim());