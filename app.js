const container=document.querySelector(".container");
const left_container=document.querySelector(".left");
const right_container=document.querySelector(".right");
const up=document.querySelector(".up");
const down=document.querySelector(".down");
const slide_divs=right_container.querySelectorAll("div").length;

left_container.style.top= `-${(slide_divs-1)*100}vh`;

up.addEventListener('click',() => kaydir('up'));
down.addEventListener('click',() => kaydir('down'));

let index=0;
const kaydir= (x)=>{
    const ekran_lenght=container.clientHeight;
    console.log(ekran_lenght);
    if(x==="up"){
        index++;
        if(index> slide_divs-1){
            index=0;
        }
    }
    else if(x==="down"){
        index--;
        if(index<0){
            index=slide_divs-1;
        }
    }
    right_container.style.transform= `translateY(-${index*ekran_lenght}px)`;
    left_container.style.transform=`translateY(${index*ekran_lenght}px)`;
}