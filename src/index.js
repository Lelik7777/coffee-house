import { addBurgerMenuClickHandler, addNavItemClickHandler } from "./js/burger";
import { addBtnLeftSliderClickHandler, addBtnRightSliderClickHandler } from "./js/slider";

window.addEventListener("load", () => {
  addBurgerMenuClickHandler();
  addNavItemClickHandler();
  addBtnLeftSliderClickHandler();
  addBtnRightSliderClickHandler();
});
