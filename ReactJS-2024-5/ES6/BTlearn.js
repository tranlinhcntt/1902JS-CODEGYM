let danhSachDongVat = []

let themDongVat= (ten, loai, moTa) => {
    let dongVatMoi = {
        ten: ten,
        loai: loai,
        moTa: moTa
    }
    danhSachDongVat.push(dongVatMoi);

} 
themDongVat("Sư tử", "Thú" , "Thú săn mồi ")
themDongVat("Ngựa" , "Thú " , "Thú ăn cỏ")
console.log(danhSachDongVat)

let timDV = danhSachDongVat.filter(x => {
    let a = prompt('nhập Động Vật cần tìm')
    if(a == x.ten) {
        console.log('đã có trong danh sách')
    } else {
        console.log('Chưa có trong danh sách')
    }
})

