import { UTILS } from "./utils";

const burgerMenu = UTILS.getElement(".burger-menu");
const body = document.body;
const headerMenu = UTILS.getElement(".header__menu");
const headerNavigation = UTILS.getElement(".header__navigation");
const burgerItem1 = UTILS.getElement(".burger__item1");
const burgerItem2 = UTILS.getElement(".burger__item2");
const navItems = UTILS.getElements(".navigation__item");

const active = "active";

const addBurgerMenuClickHandler = () => {
  burgerMenu.addEventListener("click", function () {
    body.classList.toggle(active);
    headerMenu.classList.toggle(active);
    headerNavigation.classList.toggle(active);
    burgerMenu.classList.toggle(active);
    burgerItem1.classList.toggle(active);
    burgerItem2.classList.toggle(active);
  });
};
const addNavItemClickHandler = () => {
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (window.innerWidth < 769) {
        body.classList.toggle(active);
        headerMenu.classList.toggle(active);
        headerNavigation.classList.toggle(active);
        burgerMenu.classList.toggle(active);
        burgerItem1.classList.toggle(active);
        burgerItem2.classList.toggle(active);
      }
    });
  });
};
export { addBurgerMenuClickHandler, addNavItemClickHandler };
