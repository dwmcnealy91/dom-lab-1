//Section: part1
// 1. get
// 2. on click..
//add number
// set innerText of with new number
let total = 0;

document.getElementById("limeButton").addEventListener("click",cola);
document.getElementById("peanutButton").addEventListener("click",peanut);
document.getElementById("chocolateButton").addEventListener("click",chocolate);
document.getElementById("fruitButton").addEventListener("click",fruit);

function cola () {
    const totalUpdate = document.getElementById("total");
    total += 2;
    totalUpdate.innerText = `${total}`
}
function peanut () {
    const totalUpdate = document.getElementById("total");
    total += 3;
    totalUpdate.innerText = `${total}`
}
function chocolate () {
    const totalUpdate = document.getElementById("total");
    total += 4;
    totalUpdate.innerText = `${total}`
}
function fruit () {
    const totalUpdate = document.getElementById("total");
    total += 6;
    totalUpdate.innerText = `${total}`
}