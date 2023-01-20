console.log("String ${a}");

let a = 43;
a = 44;
const b = 44;
console.log("String ${a}");
a=['cat','bat','sat',];
console.log(a);

for(let i in a){
    console.log(i);
}



for(let i of a){
    console.log(i);
}

//key values

const v = {foo:1,boo:2};
for(const [key,val] of Object.entries(v)){
    console.log(key,val);
    console.log(key);
    console.log(val);
}

//functions

const sq = function square(number){
    return number*number;
}
console.log(sq(8));

//factorial 

const out = function factorial(num){
    return num < 2 ? 1:num*factorial(num-1);
}

console.log(out(5));

//cubeing values

const f = function(i){
    return i*i*i;
}


const o = function fun(f,n){
    const res = new Array(n.length);
    for(let j=0;j<n.length;j++){
        res[j]=f(n[j]);

    }
    return res;
}
const n = [0,1,2,3,4,5,];
console.log(o(f,n));


//nested functions

const s = function outer(n){
    n=n-1; //4
    const g = function inner(n){
        n=n-2;
        return n;

    }
    return g; //if n
}
//console.log(s(5)(9));
console.log(s(5)(9));

 //encapsulate the fun

 const getCode = (
    function (){  //no name function
        
        const data = 5;

        return function(){
            return data;
        }
    }
 )
 getCode() //return data

 //anonymous functions

 const s1 = function (){
    let code = 'sdfkjbs';

    return code;


 }
 console.log(s1())

 const s2 = function(){
    let code = 'skbds';
    return function(name){
        name = code;
        return name; //return code

    }
 }
 console.log(s1())

 //typeof comparisons

 const f1 = function comp(a,b){
    b=typeof b != 'undefined'? b:1;
    return a*b;

 }
 console.log(4);