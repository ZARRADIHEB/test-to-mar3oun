function changeBackgroundColor() {


let value1 = Math.random()*255
let fvalue1 = Math.floor(value1)
let value2 = Math.random()*255
let fvalue2 = Math.floor(value2)
let value3 = Math.random()*255
let fvalue3 = Math.floor(value3)

let field = document.getElementById('field');
field.style.backgroundColor = `rgb(${fvalue1}, ${fvalue2}, ${fvalue3})`;

let btn = document.getElementById('btn')
btn.style.backgroundColor =  `rgb(${fvalue1}, ${fvalue2}, ${fvalue3})`
}

function showContent() {
  let field = document.getElementById('content')
  let fieldContent = "Khalil Mar3i Akbar Miboun 🖕"
  field.innerText=fieldContent
}
function troll() {
  let btn = document.getElementById('btn');
  let btnText = btn.innerText
  
  btn.addEventListener('mousemove', function() {
    btn.innerText = "Hey Move Your Mouse 🤬";
  });
  btn.addEventListener('mouseleave' , function() {
    btn.innerText = btnText
  }
)
}

troll();



