  function toggleNavbar() {
  const menu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");
  const close = document.querySelector(".close");

  if (window.innerWidth <= 768) {
    if (menu.style.display === "flex") {
      menu.style.display = "none";
      hamburger.style.display = "block";
      close.style.display = "none";
    } else {
      menu.style.display = "flex";
      hamburger.style.display = "none";
      close.style.display = "block";
    }
  }
}

