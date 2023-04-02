
// const btn1 = () => {
//     const $tr1 = document.getElementById('tr1');
//     $tr1.remove();
//   };
//   const $btn1 = document.getElementById('btn1');
//   $btn1.onclick = btn1;

//   const btn2 = () => {
//     const $tr2 = document.getElementById('tr2');
//     $tr2.remove();
//   }; 
//   const $btn2 = document.getElementById('btn2');
//   $btn2.onclick = btn2; 

//   const btn3 = () => {
//     const $tr3 = document.getElementById('tr3');
//     $tr3.remove();
//   };
//   const $btn3 = document.getElementById('btn3');
//   $btn3.onclick = btn3;  

//   const btn4 = () => {
//     const $tr4 = document.getElementById('tr4');
//     $tr4.remove();
//   };
//   const $btn4 = document.getElementById('btn4');
//   $btn4.onclick = btn4;

let textInput = document.getElementById("text");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

const $button = document.getElementById('button');
$button.onclick = () => {
  if (textInput.value && emailInput.value && passwordInput.value) {
    alert("Đăng ký thành công");
  } else {
    alert("Hãy nhập đầy đủ thông tin");
  }
}

