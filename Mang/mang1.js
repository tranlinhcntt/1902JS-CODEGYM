let arr = [10, 10, 52, 45, 60];
// arr[2] = 10; // cách truy xuất  thay 10 vào vị trí thứ 2 của mảng
// console.log(arr);
// for ( let i = 0 ; i  < arr.length; i++) {
//     console.log(arr[i]);
// }
//-------------------------------------------------------
// tìm số lớn nhất

// let max = arr[0];
// for ( let i = 0 ; i < arr.length;i++) {
//     if (arr[i] > max ) {
//         max = arr[i];
//     }
// }
// console.log(max)
//-------------------------------------------------
// tìm max thứ 2
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// let max2 = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max2 && arr[i] < max) {
//     max2 = arr[i];
//   }
// }
// console.log(max2);
// console.log(max);

//---------------------------------------------------

// let arr1 = [5, 5, 3, 4, 5, 2];
// // nhập vào x, in ra vị trí của x ở trong mảng ( vd: x = 4 => 3 . x = 5 => 0,1,4 )
// let x = +prompt("nhập vào giá trị ")
// for( let i = 0; i< arr1.length; i ++ ) {
//     if ( arr1[i] == x ) {
//         console.log(i)
//     }
// }

// tìm max và vị trí của nó 

let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } if (max == arr[i]) {
    console.log(i)
  }
}    console.log(max)




