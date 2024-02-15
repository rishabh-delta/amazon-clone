const imgs=document.querySelectorAll(".header-slider ul img");
const prev_btn=document.querySelector(".control_prev");
const next_btn=document.querySelector(".control_next");

let n=0;

function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].classList.remove("display-block");
        imgs[i].classList.add("display-none");
    }
    imgs[n].classList.add("display-block");
}
changeSlide();
prev_btn.addEventListener('click',(element)=>{
    if(n>0){
        n--;
    }
    else{
        n= imgs.length - 1;
    }
    
    changeSlide();
})
next_btn.addEventListener('click',(element)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n= 0;
    }
    
    changeSlide();
})


