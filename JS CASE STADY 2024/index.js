// let amountElement = document.getElementById('amount')
// let amount = amountElement.value
// console.log(amount) 


//login ------------------------------------------------------------

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "123") {
      let url = "http://127.0.0.1:5500/index.html";
      alert('Đăng nhập thành công')
      window.open(url);
    } else {
      alert("Tên người dùng hoặc mật khẩu không đúng. Vui lòng thử lại!");
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  });


  // tăng giảm số lượng sản phẩm ---------------------------------------

let amountElement = document.getElementById('amount')
let amount = amountElement.value 
function render(amount) {
    amountElement.value =  amount
} 

function xylycong() {    
    console.log(amount) 
    amount++
    render(amount)
}

function xylytru() {
    if(amount>1) 
    amount--
    render(amount)
}
amountElement.addEventListener('input', () => {
    amount = amountElement.value
    amount = parseInt(amount)
    amount = (isNaN(amount)|| amount==0)?1:amount
    render(amount)
    console.log(amount)
})


// Thêm Sửa xóa ----------------------------------------------------


let arrProduct = [];

function displayAllProduct() {
let data = "<table>";
let sum = 0
data += "<tr>";
data += "<th>STT </th>";
data += "<th>Tên sản phẩm</th>";
data += "<th>SL</th>";
data += "</tr>";

for (let i = 0; i < arrProduct.length; i++) {
data += "<tr>";
data +=  "<td>" +i+"</td>";
data += "<td>" + arrProduct[i] + "</td>";
data +=  "<td>"  +  amount + "</td>";
data +=  "<td id='edit1'><button class='btn btn-primary' onclick='edit(" + i + ")'>Edit</button> <button class='btn btn-danger' onclick='deleteP(" + i + ")'>X</button></td>";
data +=  "<td></td>";
data += "</tr>";
sum = arrProduct.length * amount
}
data += "<tr>";
data += "<th></th>";
data += "<th>Tổng sản phẩm</th>";
// data += "<th>" + arrProduct.length + "</th>";
data += "<th>" + sum + "</th>";
data +=  "<td><button class='btn btn-success' onclick='dathang()'>Đặt hàng</button></td>";
data += "</tr>";

data += "</table>";
document.getElementById("kq").innerHTML = data;
}
function add() {
let ProductName = document.getElementById("add").value;
arrProduct.push(ProductName);
document.getElementById("add").value = "";
displayAllProduct();
}

function edit(index) {
let newProduct = alert(
"bạn muốn thay đổi số lượng mới :(" + amount + ") ", amount );
if (newProduct != null) {
amount[index] = newProduct;
}
displayAllProduct();
}

function deleteP(index) {
if (
confirm("bạn chắc chắn muốn xóa sản phẩm : " + arrProduct[index] + "?")
) {
arrProduct.splice(index, 1);
}
displayAllProduct();
}
 
function dathang() {  
        alert('Cảm ơn bạn đã để lại thông tin shop sẽ liên lạc với bạn')       
       
}
