const form = document.getElementById("contact-us-form");

// Use standart event listener
// novalidate attribute is present on form
form.addEventListener("submit", (event) => {
    // Disable default behavior of event
    event.preventDefault();

    // Get values
    let nameVal = form["name"].value,
        emailVal = form["email"].value,
        compNameVal = form["comp-name"].value,
        titleVal = form["title"].value,
        msgVal = form["message"].value;

    // Check if all fields are filled
    let validInput = nameVal && emailVal && compNameVal && titleVal && msgVal;

    console.log(form.children);
    if (validInput) {
        form.reset();
        for (let i = 0; i < form.children.length - 1; i+= 2){
            // Restore fields to starting styles
            form.children[i].style.color = "#FFF";
            form.children[i].style["border-bottom"] = "1px solid #79c8c7";

            // Remove text under fields
            form.children[(i + 1)].style.display = "none";
        }
    } else {
        if (!nameVal) {
            form.children[0].style.color = "#f67e7e";
            form.children[0].style["border-bottom"] = "1px solid #f67e7e";
            form.children[0].nextElementSibling.style.display = "block";
        }
        if (!emailVal){
            form.children[2].style.color = "#f67e7e";
            form.children[2].style["border-bottom"] = "1px solid #f67e7e";
            form.children[2].nextElementSibling.style.display = "block";
        }
        if (!compNameVal){
            form.children[4].style.color = "#f67e7e";
            form.children[4].style["border-bottom"] = "1px solid #f67e7e";
            form.children[4].nextElementSibling.style.display = "block";
        }
        if (!titleVal){
            form.children[6].style.color = "#f67e7e";
            form.children[6].style["border-bottom"] = "1px solid #f67e7e";
            form.children[6].nextElementSibling.style.display = "block";
        }
        if (!msgVal){
            form.children[8].style.color = "#f67e7e";
            form.children[8].style["border-bottom"] = "1px solid #f67e7e";
            form.children[8].nextElementSibling.style.display = "block";
        }
    }
});
