// Counter animation

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");
const count=+counter.innerText;

const increment=target/200;

if(count<target){

counter.innerText=Math.ceil(count+increment);
setTimeout(update,10);

}else{

counter.innerText=target;

}

};

update();

});


// Scroll reveal animation

const reveals=document.querySelectorAll(".scroll-reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

const windowHeight=window.innerHeight;
const elementTop=el.getBoundingClientRect().top;

if(elementTop<windowHeight-100){
el.classList.add("active");
}

});

});