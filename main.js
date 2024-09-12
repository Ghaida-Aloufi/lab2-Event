
let b=document.getElementById("p")
let x = document.getElementById("button1")

x.addEventListener("click",()=>{
  b.textContent="hello"
})



let y = document.getElementById("button2")

y.addEventListener("click",()=>{
b.textContent="tuwaiq"
   b.style.fontSize="20px";
})

let z = document.getElementById("button3")

z.addEventListener("click",()=>{
   b.style.fontSize="5px";
})


let p = document.getElementById("button4")

p.addEventListener("click",()=>{
   b.style.color="brown";
})

let w = document.getElementById("button5")

w.addEventListener("click",()=>{
   b.style.background="black";
})



let i = document.getElementById("button6")

i.addEventListener("click",()=>{
   document.body.style.backgroundImage=" url(https://cdn.tuwaiq.edu.sa/landing/images/logo/logo-h.png) "
})


