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


// Arrow

const arrowClick = document.querySelectorAll(".arrow");

const toggleActive = (element) => {
    element.classList.toggle("active");
}


arrowClick.forEach(item => {
    item.addEventListener("click", () => toggleActive(item));
})


const desktopFutureButton = document.querySelector(".feature");

desktopFutureButton.addEventListener("click", () => {
    const subMenuFuture = document.querySelector(".feature-menu");
    subMenuFuture.classList.toggle("active");
})

const desktopCompanyButton = document.querySelector(".company");

desktopCompanyButton.addEventListener("click", () => {
    const subMenuCompany = document.querySelector(".company-menu");
    subMenuCompany.classList.toggle("active");
})

const mobileFutureButton = document.querySelector(".mobile-feature");


mobileFutureButton.addEventListener("click", () => {

    const pad = document.querySelector(".mobile-feature");
    pad.classList.toggle("active");

    const subMenuFuture = document.querySelector(".mobile-feature-menu");
    subMenuFuture.classList.toggle("active");
})

const mobileCompanyButton = document.querySelector(".mobile-company");

mobileCompanyButton.addEventListener("click", () => {

    const pad = document.querySelector(".mobile-company");
    pad.classList.toggle("active");

    const subMenu = document.querySelector(".mobile-company-menu");
    subMenu.classList.toggle("active");
})