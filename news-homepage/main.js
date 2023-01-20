const hamburgerMenuOpenButton = document.querySelector(".hamburger-menu-open");
const hamburgerMenuCloseButton = document.querySelector(".hamburger-menu-close");


hamburgerMenuOpenButton.addEventListener("click", () => {
    const mobilMenu = document.querySelector(".hamburger-menu-wrapper");
    mobilMenu.classList.add("open");
})

hamburgerMenuCloseButton.addEventListener("click", () => {
    const mobilMenu = document.querySelector(".hamburger-menu-wrapper");
    mobilMenu.classList.remove("open");
})