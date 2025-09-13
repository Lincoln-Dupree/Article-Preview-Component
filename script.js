const shareBtn = document.querySelector(".share-btn");
const popUp = document.querySelector(".share-popup-container");
const shareIcon = document.querySelector(".share-img");

shareBtn.addEventListener('click', function () {
    popUp.classList.toggle("show-me");
})

shareBtn.addEventListener('mousedown', function () {
    shareIcon.src = 'images/icon-share-white.png';
})

shareBtn.addEventListener('mouseup', function () {
    shareIcon.src = 'images/icon-share.svg';
})