gsap.to(".card", {
    // x: -50,
    // y: 50,
    duration: 5,
    delay: 2,
    rotate:360,
    stagger:0.6,
    repeat: -1,
    // yoyo:true,
    yoyoEase: true,

});

var tl=gsap.timeline()
tl.from('.nav-left h2', {
    y: -40,
    duration: 1.5,
    opacity: 0,

});

const slider=document.querySelectorAll("#slider");
const btn=document.querySelector(".play-btn");
const counter=0;

/**overflow:hidden pos-relative-for parent */
 slider.forEach((slide, index)=>{
    slide.style.left= `${index * 100}%` //top,bottom-translateY,, RIGHT/LEFT-translateX
 }
);

const prev=()=>{
    counter --;
    slideImage();
};

const next=()=>{
    counter ++;
    slideImage();
};

const slideImage=()=>{
    slider.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter * 100}%)`;
    })
}

btn.addEventListener("click", ()=>{

})