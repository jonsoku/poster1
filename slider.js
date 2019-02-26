const slider = document.querySelector("#slider");
const sliderUl = document.querySelector("#slider ul");
const sliderLi = document.querySelector("#slider li");
const length = sliderLi.length;
let page = 0;
const dot = document.querySelector(".dot");




/* create dot btn  */
for(let i = 0; i < length ; i++){
    const btn = document.createElement("div");
    dot.appendChild(btn);
    btn.classList.add('dots');
}

const dots = document.querySelectorAll('.dots');

for(let i = 0 ; i < length ; i++){
    dots[i].addEventListener("click", function(){
        moveTo(i);
        page = i;
    })
};

function moveTo(index){
    index = index || 0;
    index = index % length;

    for(let i = 0 ; i < length ; i++){
        for(let j = 0 ; j < length ; j++){
            if(slideLi[j].classList.contains = "slider_active"){
                sliderLi[j].classList.remove("slider_active");
            }
        }
        sliderLi[index].classList.add("slider_active");
    }
}

function init(){
    moveTo(0);
}
init();