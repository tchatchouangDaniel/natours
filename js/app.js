const navItems = document.querySelectorAll(".navigation__link");
const checkBox = document.querySelector(".navigation__checkbox");
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    checkBox.checked = !checkBox.checked;
  });
});
