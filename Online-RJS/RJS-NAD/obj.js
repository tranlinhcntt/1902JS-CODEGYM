// destructuring 
let obj = [
    {
    name: 'hello',
    age: 19,
    score:0
},
{
    name: 'linh trần',
    age: 21,
    score: 10    
}]
// let obj2 = {...obj, age: 21, class: 'C29', name: 'linh'} 

// console.log(obj)
// console.log(obj2);


let {age} = obj[0]

let {name} = obj[1]

obj.push({name: 'thanh toàn', age: 22, score: 2})
console.log(age);
console.log(name);
console.log(obj);