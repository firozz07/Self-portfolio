const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));
let topbtn = document.querySelector(".top_btn");
topbtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
let resumebtn=document.querySelector(".resume");
resumebtn.addEventListener("click",()=>{
    window.open("resume.pdf");
})
