const shareBtn = document.querySelector(".share-btn");
const popUp = document.querySelector(".share-popup-container");
const shareIcon = document.querySelector(".share-img");
const footer = document.querySelector(".footer");
const mobileFooter = document.querySelector(".mobile-footer")
const mobileShareButton = document.querySelector(".share-btn-mobile")

window.addEventListener("resize", function () {
    location.reload();
})

shareBtn.addEventListener('click', function () {
    popUp.classList.toggle("show-me");
})

shareBtn.addEventListener('mousedown', function () {
    shareIcon.src = 'images/icon-share-white.png';
})

shareBtn.addEventListener('mouseup', function () {
    shareIcon.src = 'images/icon-share.svg';
})

if (window.matchMedia("(max-width: 578px)").matches) {
    shareBtn.addEventListener('click', function () {
        footer.style.display = 'none';
        mobileFooter.style.display = 'flex';
    })

    mobileShareButton.addEventListener('click', function () {
        mobileFooter.style.display = 'none';
        footer.style.display = 'flex';
    })
}

