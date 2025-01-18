let rightbutton=document.getElementById("rscroll");
let leftbutton=document.getElementById("lscroll");
rightbutton.addEventListener("click",()=>{
    document.querySelector(".ul").scrollLeft+=700;
})
leftbutton.addEventListener("click",()=>{
    document.querySelector(".ul").scrollLeft-=700;
})