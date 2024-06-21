function loadComponent(path, elementId) {
  fetch(path)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading component:", error);
    });
}

// Load header and footer components
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("./components/header.html", "header");
  loadComponent("./components/footer.html", "footer");
});
