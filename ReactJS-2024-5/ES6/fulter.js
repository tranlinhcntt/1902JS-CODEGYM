


let arr = [
    {
        name: 'A',
        score: 10
    },
    {
        name: 'B',
        score: 8
    },
    {
        name: 'C',
        score: 8
    },
    {
        name: 'D',
        score: 9
    },


]

let brr = arr.filter(iteam => iteam.score>=9 )
console.log(brr)

// tính tổng điểm sinh viên bằng reduce

let sum =  arr.reduce((x,y) => x + y.score,0  );
console.log(sum)