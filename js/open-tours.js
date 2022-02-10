window.addEventListener("DOMContentLoaded",()=>{
    let buttons = document.querySelectorAll(".buttons");
    for (let button of buttons) {
        if(button.className === 'btn_1 buttons'){
            button.addEventListener("click",()=>{
                window.location.href = "#tours";
                document.querySelector(".open-card-1").style.display = "flex";
                document.querySelector(".open-card-2").style.display = "none";
                document.querySelector(".area-open-cards").style.opacity = "1";
                document.querySelector(".area-open-cards").style.transform = "translateX(0%)";
                if(window.innerWidth > 400){
                    document.body.style.overflowY = "hidden";
                }
            })
            document.querySelector(".btn_exit").addEventListener("click",()=>{
                document.querySelector(".area-open-cards").style.opacity = "0";
                document.querySelector(".area-open-cards").style.transform = "translateX(100%)";
                document.body.style.overflowY="scroll";
            });
        }
        if(button.className === "btn_2 buttons"){
            button.addEventListener("click", ()=>{
               window.location.href = "#tour-2";
               document.querySelector(".area-open-cards").style.opacity = "1";
               document.querySelector(".open-card-1").style.display = "none";
               document.querySelector(".open-card-2").style.display = "flex";
               document.querySelector(".area-open-cards").style.transform = "translateX(0%)";
               document.querySelector(".area-open-cards").style.transform = "translateY(65%)";
               if(window.innerWidth > 400){
                   document.body.style.overflowY = "hidden";
               }
            });
        }
    }
    let buys = document.querySelectorAll(".buy");
    for(let buy of buys){
        buy.addEventListener("click", ()=>{
            window.location.href = "#sale";
            document.body.style.overflowY="scroll";
            document.querySelector(".area-open-cards").style.opacity = "0";
            document.querySelector(".area-open-cards").style.transform = "translateX(100%)";
            document.querySelector(".open-card-1").style.display = "none";
            document.querySelector(".open-card-2").style.display = "none";
        });
    }
});