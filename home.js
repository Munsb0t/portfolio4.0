let scrollC = document.querySelector(".gallery");
let rightBtn=document.getElementById("rightBtn");
let leftBtn=document.getElementById("leftBtn");

console.log(scrollC);

scrollC.addEventListener("wheel", (evt) => {
    evt.preventDefault();  // Prevent the default scroll behavior
    scrollC.scrollLeft += evt.deltaY;  // Scroll horizontally
    scrollC.style.scrollBehavior="auto";
});

rightBtn.addEventListener("click", ()=>
{ scrollC.style.scrollBehavior="smooth";
scrollC.scrollLeft +=900;

});

leftBtn.addEventListener("click", ()=>
    {scrollC.style.scrollBehavior="smooth";
    scrollC.scrollLeft -=900;  
    
    });

