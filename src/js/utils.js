export const UTILS = {
  getElement(selector, element = document) {
    return element.querySelector(selector);
  },

  getElements(selector, element = document) {
    return element.querySelectorAll(selector);
  },
};
