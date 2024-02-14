let clickBtn = document.querySelector(".clickBtn");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(".closeBtn");
function hideDisplay(){
    overlay.classList.add("hidden");
}
clickBtn.addEventListener("click",function() {
    overlay.classList.remove("hidden");
    overlay.classList.remove("close-modal");
    overlay.classList.add("open-modal");
   
});

closeBtn.addEventListener("click",function() {
    overlay.classList.remove("open-modal");
    overlay.classList.remove("hidden");
    overlay.classList.add("close-modal");
    setTimeout(hideDisplay,3000);
});

