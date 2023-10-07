let person = {
  address: "Hồ Tây",
  phone_number: "0123456789",
};

// Truy cập vào 1 thuộc của 1 đối tượng và lấy ra value của thuộc tính đó thì: tên đối tượng.thuộc tính
console.log(person.address);
console.log(person);

///////////////////////////////// Mảng:
let array = ["a", "b", "c", "d", "e"];
// Để truy cập vào vị trí trong 1 mảng: Tên mảng[index]
// index được đếm từ vị trí 0
console.log(array[0]);
// độ dài của mảng: tên mảng.length
// Thêm 1 giá trị vào mảng dùng hàm push

////////////////////////////// Local storage: setItem(key, value), getItem(key), removeItem(key)
// Note: key và value đều kiểu dữ liệu là string
localStorage.setItem("T", JSON.stringify(person));

// Chuyển từ đối tượng/mảng ở dạng string sang dạng đối tượng bình thường JSON.parse()
let getValueLocal = JSON.parse(localStorage.getItem("T"));
console.log(getValueLocal);

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0 && i % 7 == 0 && i % 3 == 0) {
    console.log(i);
  }
}

// let name1 = prompt("Enter name");
// console.log("Tên của tôi là: " + name1);

// let name2 = prompt("Enter name");
// console.log("Tên của tôi là: " + name2);

// let name3 = prompt("Enter name");
// console.log("Tên của tôi là: " + name3);

// let name4 = prompt("Enter name");
// console.log("Tên của tôi là: " + name4);

// let name5 = prompt("Enter name");
// console.log("Tên của tôi là: " + name5);

// let list_name = [name1, name2, name3, name4, name5];

// console.log(list_name);
// alert("ĐỪng quên bài nữa ko là chép");

// Lấy thẻ thông qua dom: chúng ta thấy thẻ đó dựa vào tên thẻ, tên class, tên id của thẻ đó
let name = document.getElementById("name"); // vì là id nên element ta lấy được sẽ tồn tại ở dạng 1 thẻ
console.log(name);
// thay đổi nộ dung của 1 thẻ thông qua dome
name.innerText = "ABC";

// Gán CSS cho thẻ đó thông qua dome
name.style.fontSize = "100px";
name.className = "abc";

// thẻ thông qua class name: list1
let list1 = document.getElementsByClassName("list1");
// vì class name có thể đặt nhiều lần nên khi lấy thông qua class ta sẽ được 1 mảng

list1[0].innerText = "Phong PVP";
list1[1].innerText = "Phong PVP";
console.log(list1);

let box = document.querySelector(".box");
box.style.width = "120px";
box.style.height = "120px";
box.style.backgroundColor = "yellow";
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  if (box.style.borderRadius == "50%") {
    box.style.borderRadius = "0%";
  } else {
    box.style.borderRadius = "50%";
  }
});

let a = prompt("number");
