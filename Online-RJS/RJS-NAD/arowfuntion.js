// dùng hàm arow funtion 
        let test = () => (5) 
        console.log(test())

// tương đương với cái trên 
        let test1 = () => {
            return 10;
        }
        console.log(test1());
// dùng funtion gốc 

function test2() {
    return 15
}
console.log(test2())

// arowfuntion dạng có 1 biến và 2 biến 
// cú pháp lamda trong ES6

const square1 = num.map(n => n * n )
const square2 = num.map((a,b) => { return n * n })