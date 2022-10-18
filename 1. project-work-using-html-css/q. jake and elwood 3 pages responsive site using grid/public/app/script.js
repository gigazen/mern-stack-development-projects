const openButton = document.querySelector(".open-nav");
const closeButton = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");

// when user clicks on hamburger button then .navigation-open class gets added to nav element means then navigation opens or nav menu translates from right to left by 100% (because of translateX(-100%)) i.e. navigation appeares for smaller screen
openButton.addEventListener("click", () => {
  nav.classList.add("navigation-open");
});

// when user clicks on cross button then from nav element .navigation-open class gets removed means then navigation closes or nav menu translates from left to right by 100% (because of left: 100%) i.e. navigation disappears for smaller screen.
closeButton.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
});
