let arr = [1,3,5,2,4,5,10]
arr.map(x => {
    console.log(x);
})

console.log('------------------');

arr.map((x,y)=> {
    console.log(x  + ' tại vị trí ' + y )
})

// dùng máp, in ra các phần tử chẵn trong mảng \\ map thường dùng để hiện giao diện 


arr.map(x => {
    if ( x%2 == 0 ){
        console.log(x)
    }
})
// dùng map, tính tích các phần tử trong mảng 
let t = 1
arr.map(x => {
    t *= x ;
})
console.log(t)