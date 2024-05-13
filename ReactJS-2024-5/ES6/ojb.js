let listProdouct = [
    {
        id: 1,
        name: 'A',
        price: 102,
        quantity: 5
    
    },
    {
        id: 2,
        name: 'AB',
        price: 12,
        quantity: 2
    
    },
    {
        id: 3,
        name: 'C',
        price: 15,
        quantity: 3
    
    },
]

// 1 sử dụng map in ra name và price của các sản phẩm

listProdouct.map((x)=> {
    console.log(x.name, x.price);
})
//2 Sử dụng map tìm ra các sản phẩm có giá trị > 100 
listProdouct.map(x => {
    if(x.price > 100 ) {
        console.log(x)
    }
})
//3 sử dụng filter, tìm ra các sản phẩm có giá > 100 

let b = listProdouct.filter(y=>y.price < 100)
console.log(b);

//4 sử dụng map tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm 
let sum = 0;
listProdouct.map((e) => {
    sum += e.price * e.quantity;
    console.log(sum)
})
// 5 sử dụng reduce, tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm

let t= listProdouct.reduce((xy, sum1) => xy + sum1.price * sum1.quantity ,0);
console.log(t);
