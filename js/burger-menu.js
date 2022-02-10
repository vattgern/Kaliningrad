window.addEventListener("DOMContentLoaded",()=>{
   const burger = document.querySelector(".burger-menu");
   burger.addEventListener("click",()=>{
       document.querySelector(".header-list-ul").classList.toggle("list-none");
       let list = document.querySelectorAll(".header-list-ul a");
       for (let listElement of list) {
           listElement.classList.toggle("inner-block");
       }
       document.querySelector(".burger-menu").classList.toggle("burger-menu-move");
       document.querySelector(".menu-one").classList.toggle("for-m-one");
       document.querySelector(".menu-two").classList.toggle("for-m-two");
       document.querySelector(".menu-three").classList.toggle("for-m-three");
   });
});