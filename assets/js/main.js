function adjustGridLayout() {
    const grid = document.querySelector(".grid");
  
    // Adjust min-width of grid items based on window width
    if (window.innerWidth < 600) {
      grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))"; // Smaller minimum width
    } else {
      grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))"; // Default minimum width
    }
  }
  
// Call the function on page load
adjustGridLayout();
  
// Adjust on window resize
window.addEventListener("resize", adjustGridLayout);
  