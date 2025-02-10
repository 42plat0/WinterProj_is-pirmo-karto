
/* Function for hamburger menu, when it's clicked the side menu shows up */
function showSidebar() {
  const sidebar = document.querySelector("aside");
  sidebar.style.display = "block";
}

/* Function for slide menu close icon, when it's clicked the side menu disappears */
function hideSidebar() {
  const sidebar = document.querySelector("aside");
  sidebar.style.display = "none";
}

// Removes sidebar if view is tablet
window.addEventListener("resize", () => {
  if (document.body.clientWidth >= 768)
    hideSidebar();
})
