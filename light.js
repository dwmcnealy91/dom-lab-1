document.getElementById("onButton").addEventListener("click",on);
document.getElementById("offButton").addEventListener("click",off);
document.getElementById("toggleButton").addEventListener("click",toggle);
document.getElementById("endButton").addEventListener("click",end);

let lightBulb = document.querySelector("div");
let buttons = document.querySelectorAll("button");

function on () {
    lightBulb.classList.add("light");
}
function off () {
    lightBulb.classList.remove("light");
}
function toggle () {
    lightBulb.classList.toggle("light");
}
function end () {
    lightBulb.style.cssText = "display: none";
    for (button of buttons) {
        button.disabled = true;
    }
 }   

    //how emilie does it

    //let lightBulb = document.querySelector("div");
    //let on = document.getElementById("on");
    //let off = document.getElementById("off");
    //let toggle = document.getElementById("toggle");
    //let end = document.getElementById("end");
    //let buttons = document.getElementById("button");

    //on.addEventListener("click",() => {
    //    lightBulb.classList.add("light");
    //});
    //of.addEventListener("click",() => {
    //    lightBulb.classList.add("light");
    //});
    //toggle.addEventListener("click",() => {
    //    lightBulb.classList.add("light");
    //});
    //end.addEventListener("click",() => {
    //    lightBulb.classList.add("light");
    //});

    //end.addEventListener("click", () => {
    //    buttons.forEach((button) => {
    //      button.disabled = true;
    //      lightBulb.style.cssText = "display: none";
    //    });
    //  });
    
