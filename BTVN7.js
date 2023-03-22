//BT7

// let n = Number(prompt("Nhập số n: "));
// let uoccuan = [];

// for(let i = 1; i <= n; i++) {
//     if(n % i == 0) {
//         uoccuan.push(i);
//     }
// }
// console.log(`Ước của n là ${uoccuan}`);


//BT8
// let n = Number(prompt("Nhập số n: "));
// let songuyento = true;

// if(n == 1 || n == 0) {
//     songuyento = false;
// } else {
//     for(let i = 2; i < n; i++) {
//         if(n % i == 0) {
//             songuyento = false;
//             break;
//         }
//     }
// }
// if(songuyento) {
//     console.log(`${n} là số nguyên tố`);
// } else {
//     console.log(`${n} không phải số nguyên tố`);
// }


//BT9
// let s = prompt("Nhập chuỗi s");
// let l = prompt("Nhập số l");

// while(s.length < l) {
//     s = '0' + s;
// }

// console.log("Chuỗi mới là " + s);


//BT14
// let n = Number (prompt("Nhập cạnh n >=2")); n>=2;

// for(let i = 1; i <= n; i++) {
//     let row = '';
//     let column = '';


//     for(let j = 1; j <= n; j++) {
//         row += '*';
//     }

//     for (let k = 1; k <= n; k++) {
//         column += '*'
//     }

//     console.log(row);
//     console.log (column);
// }
