let bullets = document.querySelectorAll(" .container .main li");
let tar = document.querySelector("  .container .target"); 


tar.classList.add(localStorage.getItem("target-color" )
);

let classes = [];

for (var i = 0; i < bullets.length; i++) {
    classes.push(bullets[i].getAttribute("data-color"));

    bullets[i].addEventListener("click", function() {
        tar.classList.remove(...classes);

        tar.classList.add(this.getAttribute("data-color"));

        localStorage.setItem("target-color" , this.getAttribute("data-color") )

    }
)};
// #################################### 

//  change body back ground color randomly
let btn = document.querySelector(".btn");

btn.addEventListener('click', randomBg);

// function randomBg() {
//     document.body.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);}


function randomBg() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    
    document.body.style.backgroundColor = rgbColor;
}



// ####################################


