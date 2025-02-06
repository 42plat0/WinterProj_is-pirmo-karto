const cardContainer = document.querySelector(".about-directors--container");

const cards = document.querySelectorAll(".director-card--normal");

console.log(cardContainer);
console.log(cards);

/*
    Hide img
    Hide role 
    Start displaying text
    Start displaying li elements
    Change button image
*/

cards.forEach((card) => {
    // Create array from HTML collection
    const children = Array.from(card.children);

    let isToggled = false;
    // Iterate through elements of card and find button
    children.forEach((child) => {
        // console.log(child);
        if (child.tagName === "BUTTON") {
            child.addEventListener("click", (e) => {
                const currentCard = child.parentNode;

                const img = currentCard.children[0];
                const text = currentCard.children[2];
                const role = currentCard.children[3];
                const svgList = currentCard.children[4];

                // Button is pressed second time
                if (isToggled) {
                    // Show img
                    img.classList.remove("hidden-element");
                    // Show role
                    role.classList.remove("hidden-element");

                    // Hide text
                    text.classList.add("hidden-element");

                    // Hide svg's
                    svgList.classList.remove("about-directors__logo");
                    svgList.style.display = "none";
                    
                    // Remove padding from card after going back
                    currentCard.classList.remove("card--after-click-padding");

                    isToggled = false;
                    
                    // Change to other pic
                    child.firstElementChild.src = "../assets/images/icon-cross.svg";

                // First time pressing the button
                } else {
                    // Hide img
                    img.classList.add("hidden-element");

                    // Hide role
                    role.classList.add("hidden-element");

                    // Show text
                    text.classList.remove("hidden-element");

                    // Show svg's
                    svgList.classList.add("about-directors__logo");
                    svgList.style.display = "flex";

                    // Add padding
                    currentCard.classList.add("card--after-click-padding");

                    isToggled = true;
                    
                    // Change to same pic
                    child.firstElementChild.src = "../assets/images/icon-close.svg";
                }
            });
        }
    });
});
