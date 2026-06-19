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

let tictac=document.querySelector(".tic-tac");
tictac.addEventListener("click",()=>{
    window.open("screenshot (43).png")
});

let todo=document.querySelector(".todo");
todo.addEventListener("click",()=>{
    window.open("screenshot (53).png")
});

let portfolio=document.querySelector(".portfolio");
portfolio.addEventListener("click",()=>{
    window.open("screenshot (42).png")
});

let amazon=document.querySelector(".amazon");
amazon.addEventListener("click",()=>{
    window.open("screenshot (44).png")
});
