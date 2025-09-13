const shareBtn = document.querySelector(".share-btn");
const popUp = document.querySelector(".share-popup-container");

shareBtn.addEventListener('click', function () {
    popUp.classList.toggle("show-me");
})