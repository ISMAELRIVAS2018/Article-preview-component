const links = document.querySelector(".card_hide_container");
const shareButton = document.querySelector(".card_btn");

shareButton.addEventListener("click", function () {
  links.classList.toggle("hide");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!links.classList.contains("hide")) {
      links.classList.add("hide");
    }
  }
});