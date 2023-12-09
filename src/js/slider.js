import { UTILS } from "./utils";

const buttonLeft = UTILS.getElement("#button_left");
const buttonRight = UTILS.getElement("#button_right");
const sliderContainer = UTILS.getElement(".slider__container");
const sliderLines = UTILS.getElements(".slider__line");
let flag = true;
let index = 0;
const numberImgs = 3;
let autoScroll_dir = -1;
const isAutoScroll = true;
const timeInterval = 5000;

const addBtnLeftSliderClickHandler = () => {
  buttonLeft.addEventListener("click", function () {
    if (index === 0) {
      index = numberImgs - 1;

      if (sliderContainer) {
        sliderContainer.style.left = `-${index * 100}%`;
      }
    } else {
      index--;

      if (sliderContainer) {
        sliderContainer.style.left = `-${index * 100}%`;
      }
    }
  });
};
const addBtnRightSliderClickHandler = () => {
  buttonRight.addEventListener("click", function () {
    if (index === numberImgs - 1) {
      index = 0;
      sliderContainer.style.left = `-${index * 100}%`;
    } else {
      index++;
      sliderContainer.style.left = `-${index * 100}%`;
    }
  });
};

const autoScroll = () => {
  if (!isAutoScroll) return;
  if (index === 0) autoScroll_dir = -1;
  else if (index === numberImgs - 1) {
    autoScroll_dir = 1;
  }
  if (autoScroll_dir < 0) {
    if (index < numberImgs) {
      index++;
      fillProgressBar(sliderLines[index], timeInterval);
      console.log("index before", index);
      sliderContainer.style.left = `-${index * 100}%`;
      console.log(index);
    }
  } else {
    index = 0;
    fillProgressBar(sliderLines[index], timeInterval);
    sliderContainer.style.left = `-${index * 100}%`;
  }
};

//launch progress bar
fillProgressBar(sliderLines[0], timeInterval);
const interval = setInterval(autoScroll, timeInterval);

function fillProgressBar(progressEl, time) {
  console.log("progress", index);
  console.log(progressEl.value);
  let start = 0;
  let innerTime = Math.round(time / 100);
  let intervalId = setInterval(() => {
    if (start > 100) {
      clearInterval(intervalId);
      progressEl.value = 0;
    } else {
      progressEl.value = start;
    }

    start++;
  }, innerTime);
}

export { addBtnLeftSliderClickHandler, addBtnRightSliderClickHandler };
