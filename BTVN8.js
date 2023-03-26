//BT1
let array1 = [1,2,3,4,5,6];
let tich = 1;
for (let i=0; i< array1.length; i++) {
    tich = array1 [i] *tich
} 
console.log (tich);

// tìm tất cả giá trị trong mảng chia hết cho 2 => evennumber
const numbers = [1, 7, 9, 10, -10, 3, 0, 2];
const evennumber = [];
for (let i=0; i<numbers.length; i++) {
    if (numbers [i] %2 == 0) evennumber.push (numbers [i]);
}

if (evennumber.length == 0) {
    console.log ("Không có số nào chia hết cho 2");
} else {

    
    let min = evennumber [0];
    for (let i = 0; i<evennumber.length; i++) {
        if (min > evennumber [i]) min = evennumber [i]
    }
    console.log ("gía trị nhỏ nhất chia hết cho 2 là: " + min)

}


let chiahetcho3 = 0;

for (let i = 0; i < array1.length; i++) {
  if (array1[i] % 3 === 0 && array1[i] > chiahetcho3) {
    chiahetcho3 = array1[i];
  }
}

console.log("Số lớn nhất chia hết cho 3: " + chiahetcho3);

let sum = 0;
for(let i = 0; i < array1.length; i++){
  sum += array1[i];
}

const avg = sum / array1.length;

console.log("Trung bình của mảng là: " + avg);



let nhohon10 = false;
for(let i = 0; i < array1.length; i++){
  if(array1[i] < 10){
    menhde = true;
    break;
  }
}

if(menhde){
  console.log("Có số lớn hơn 10 trong mảng.");
} else {
  console.log("Không có số lớn hơn 10");
}


let lonhon20 = true;
for (let i = 0; i < array1.length; i++) {
  if (array1[i] <= 20) {
    lonhon20 = false;
    break;
  }
}

if (lonhon20) {
  console.log("Tất cả các phần tử trong mảng đều lớn hơn 20.");
} else {
  console.log("Tất cả các phần tử trong mảng đều không lớn hơn 20");
}
