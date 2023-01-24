// Faq Item

const faqItemElements = document.querySelectorAll(".faq-item");

const toggleActive = (element) => {
    faqItemElements.forEach(el => el.classList.remove("active"));
    element.classList.toggle("active");
}


faqItemElements.forEach(faqItem => {
    faqItem.addEventListener("click", () => toggleActive(faqItem));
})

// Hamburger Menu

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

