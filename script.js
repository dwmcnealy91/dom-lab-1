
const formEl = document.getElementById("countryForm")
const countryInput = document.getElementById("country");
const popInput = document.getElementById("pop");
const europeanInput = document.getElementById("european");

// 1. handle the submit event
formEl.addEventListener("submit",(e) => {
    e.preventDefault(); // Do not refresh the page

 //2. get the values from the from
const countryName = countryInput.value;
const population = parseInt( popInput.value );
const isInEurope = europeanInput.checked;

console.log(countryName, population, isInEurope);

// 3. Clear form
countryInput.value = "";
popInput.value = "";
europeanInput.checked = false;
});