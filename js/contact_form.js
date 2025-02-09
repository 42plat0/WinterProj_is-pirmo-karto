const form = document.getElementById("contact-us-form");

// Loop through form elements except button
for (let i = 0; i < form.length - 1; i++) {
    let inputField = form[i];
    inputField.addEventListener("focus", () => {
        // Restore fields's styles
        inputField.style.color = "#FFF";
        inputField.style["border-bottom"] = "1px solid #79c8c7";
        // Stop displaying err text
        inputField.nextElementSibling.style.display = "none";
    });
    // Change field border to original color if text wasnt entered after focusing
    inputField.addEventListener("blur", () => {
        if (inputField.value === ""){
            inputField.style["border-bottom"] = "1px solid #fff";
        }
    })
}

// Use standart event listener
// novalidate attribute is present on form
form.addEventListener("submit", (event) => {
    // Stop form from submiting
    event.preventDefault();

    // Get values
    let nameVal = form["name"].value,
        emailVal = form["email"].value,
        compNameVal = form["comp-name"].value,
        titleVal = form["title"].value,
        msgVal = form["message"].value;

    // Empty fields's index in children array is extracted
    // And used to style them in else clause
    let input = [
        Boolean(nameVal),
        Boolean(validateEmail(emailVal)),
        Boolean(compNameVal),
        Boolean(titleVal),
        Boolean(msgVal),
    ];
    let indexesOfInvalidInp = getAllIndexes(input, false);

    if (!indexesOfInvalidInp.length) {
        // Clear fields
        form.reset();
        // Loop through children except button
        for (let i = 0; i < form.children.length - 1; i += 2) {
            // Restore fields's styles
            form.children[i].style.color = "#FFF";
            form.children[i].style["border-bottom"] = "1px solid #79c8c7";
            // Change css variable property
            form.children[i].style.setProperty("--c", "--color-light-coral-primary")
            // Remove text under field
            form.children[i + 1].style.display = "none";
        }
        // Set button to disabled state after submiting valid form
        form.children[form.children.length - 1].disabled = true;
    } else {
        indexesOfInvalidInp.forEach((ind) => {
            form.children[ind].style.color = "#f67e7e";
            console.log(form.children[ind])
            form.children[ind].style["border-bottom"] = "1px solid #f67e7e";
            // Display text under field
            form.children[ind].nextElementSibling.style.display = "block";
        });
    }
});

function getAllIndexes(inpArr, val) {
    let arr = [];
    for (let i = 0; i < inpArr.length; i++) {
        if (inpArr[i] === val) arr.push(i * 2);
    }
    return arr;
}

function validateEmail (email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};