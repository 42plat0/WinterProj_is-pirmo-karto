const cards = document.querySelectorAll(".director-card--normal");

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

    let isCardFlipped = false;
    // Iterate through elements of card and find button
    children.forEach((child) => {
        if (child.tagName === "BUTTON") {
            child.addEventListener("click", (e) => {
                const currentCard = child.parentNode;
                
                // get elements
                // P.S. prone to bugs if html structure is changed
                const img = currentCard.children[0];
                const text = currentCard.children[2];
                const role = currentCard.children[3];
                const svgList = currentCard.children[4];

                // Button is pressed second time
                if (isCardFlipped) {
                    isCardFlipped = false;
                    
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
                    currentCard.classList.remove("director-card__flipped__padding");

                    // Remove background color after going back

                    currentCard.classList.remove("director-card__flipped__color");
                    
                    // Change to other pic
                    child.firstElementChild.src = "../assets/images/icon-cross.svg";
                    // Add styles to button when card is reversed
                    child.classList.remove("director-card__btn--flipped");
                    child.classList.add("director-card__btn--front");

                // First time pressing the button
                } else {
                    isCardFlipped = true;
                    
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
                    currentCard.classList.add("director-card__flipped__padding");

                    // Add color
                    currentCard.classList.add("director-card__flipped__color");
                    
                    // Change to same pic
                    child.firstElementChild.src = "../assets/images/icon-close.svg";
                    // Add styles to button when card is reversed
                    child.classList.remove("director-card__btn--front");
                    child.classList.add("director-card__btn--flipped");
                }
            });
        }
    });
});
