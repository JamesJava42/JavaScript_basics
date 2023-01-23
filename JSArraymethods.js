//Shallow copy -- to copy one array elents to anothe array variable;
nums = [1,2,3];
console.log(nums);
numsCopy = [...nums];  
/* this copy wont work for the multi-dimens arrys it copy references insted of values.
Like example : num = [ [1],[2]]
numcopy=[...num] -- this wont work for multi-dimens array.
*/
console.log(numsCopy);

numsCopy.push(4);
console.log(numsCopy,nums);
typeof(nums);


/*
For() loop to shallow copy
*/
var s = 'string';
var s1=[];
for(var i=0;i<s.length;i++){
    s1[i]=s[i];
}
const chs=s.splice('');
console.log(s1);
console.log(chs);