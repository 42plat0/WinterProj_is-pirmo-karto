const form = document.getElementById("contact-us-form");

// Use standart event listener
// novalidate attribute is present on form
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let nameVal = form["name"].value,
        emailVal = form["email"].value,
        compNameVal = form["comp-name"].value,
        titleVal = form["title"].value,
        msgVal = form["message"].value;

    let validInput = nameVal && emailVal && compNameVal && titleVal && msgVal;

    if (validInput){

        form.reset();
    }
    else{

    console.log("hello");
    console.log(nameVal);
    }
});
