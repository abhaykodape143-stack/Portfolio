const btn = document.querySelector(".btn");
const links = document.querySelectorAll("heading");
let  curr="white";

btn.addEventListener("click" ,function(){
   document.body.classList.toggle("dark");
if(curr=="white"){
   document.body.style.backgroundColor="black";
   document.body.style.color="white";
   curr="black";
}
else{
     document.body.style.backgroundColor="white";
   document.body.style.color="black";
   curr="white";
}
});
