let startFightBtn = document.getElementById("js-start-fight-btn");
let flexCards = document.getElementById("js-flex-cards");
let showMessage = document.getElementById("js-show-message");
//pentru btn show and hide
let showHide = document.getElementById("js-hide-all");

startFightBtn.addEventListener('click', startFightFunc);
showHide.addEventListener('click', showHideFunc);

function startFightFunc() {
    flexCards.classList.add("d-none");
    showMessage.classList.add("d-block");
    showHide.classList.add("d-none");
}

function showHideFunc() {
    flexCards.classList.toggle("d-none");
    startFightBtn.classList.toggle("d-none");
    
}




























//code with bibebk

// const toggleBtn = document.querySelector("#toggleBtn");
// const divList = document.querySelector(".listHolder");

// toggleBtn.addEventListener('click', () => {
//     if()
// }





// //incercare

// let hideAllBtn = document.getElementById("js-hide-all");
// let hideFlexCards = document.getElementById("js-flex-cards");
// let hideBtnSTart = document.querySelector(".btn");

// hideAllBtn.addEventListener('click', hideAllFunc);
// hideAllBtn.addEventListener('click', toggleVisibility);


//  function hideAllFunc() {
//    hideFlexCards.classList.add("d-none");
//     hideBtnSTart.classList.add("d-none");
// };
// // function hideAllFunc() {
// //     if (hideAllBtn.style.display === "none" ) {
// //         hideFlexCards.classList.remove("d-none");
// //         hideBtnSTart.classList.remove("d-none");
// //     } else {
// //         hideFlexCards.classList.add("d-none");
// //         hideBtnSTart.classList.add("d-none");
// //     }
// };



// function showAll() {
//     if ()
//     hideFlexCards.classList.add("d-flex");
//     hideBtnSTart.classList.add("d-flex");
// };