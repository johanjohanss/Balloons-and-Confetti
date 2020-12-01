"use strict";

let button = document.querySelector(".balloon-trigger");
button.addEventListener("click", spawnBalloons);

let count = 0;

function spawnBalloons() {

    if (count == 0) {
        let audio = document.querySelectorAll(".audio");
        audio.forEach(audio => {
            audio.play();
        });
        count++;
    }

    document.body.classList.add("blur");
    let balloons = document.querySelectorAll(".bln");
    balloons.forEach(balloon => {
        balloon.classList.add("balloon");
    });
    let confetti = document.querySelectorAll(".cnf");
    confetti.forEach(confetti => {
        confetti.classList.add("confetti");
    });
}






/*<svg class="cnf" viewBox="0 0 165 135" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns: xlink="http://www.w3.org/1999/xlink" xml: space="preserve" xmlns: serif="http://www.serif.com/"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <path
        d="M0,51.983l127.922,82.227l18.701,-27.862l18.064,-22.346l-133.229,-84.002c0,0 -20.283,13.818 -31.458,51.983"
        style="fill-opacity:0.98;" />
</svg>
*/

/*for (let i = 0; i < 20; i++) {
    let cRef = document.createElement("svg");
    cRef.classList.add("cnf");
    cRef.setAttribute("viewBox", "0 0 165 135");
    cRef.setAttribute("version", "1.1");
    cRef.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    cRef.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    cRef.setAttribute("xml:space", "preserve");
    cRef.setAttribute("xmlns:serif", "http://www.serif.com/");
    cRef.setAttribute("style", "fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;");


    //let cPath = document.createElement("path");
    //cPath.setAttribute("d", "M0,51.983l127.922,82.227l18.701,-27.862l18.064,-22.346l-133.229,-84.002c0,0 -20.283,13.818 -31.458,51.983");
    //cPath.setAttribute("style", "fill-opacity:0.98;");
    cRef.innerHTML = '<path d="M2.582,26.983l181.19,103.554l24.051,0.269l-3.953,-25.477l-186.497,-105.329c0,0 -25.375,6.696 -14.791,26.983" style="fill:#4ba6ff;fill-opacity:0.98;"/>'


    //confetti.appendChild(cPath);

    let container = document.querySelector(".container");
    container.appendChild(cRef);
}
*/
