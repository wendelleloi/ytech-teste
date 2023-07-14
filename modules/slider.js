import { sliders, globalValues } from "./variables.js";

export const sliderController = () => {
  let slider = document.querySelector(".slider");
  let cardTitle = document.querySelector(".card-infos-title");
  let cardContent = document.querySelector(".card-infos-content");

  let next = document.querySelector(".fa-angle-double-right");
  let back = document.querySelector(".fa-angle-double-left");

  //load
  const load = (items) => {
    cardContent.innerText = items.content;
    cardTitle.innerText = items.title;
    slider.style.backgroundImage = `url(${items.background})`;
  };

  //next and pre song load
  let index = 0;

  const nextItem = () => {
    index = (index + 1) % sliders.length;
    load(sliders[index]);
  };

  const prevItem = () => {
    index = (index - 1 + sliders.length) % sliders.length;
    load(sliders[index]);
  };

  next.addEventListener("click", nextItem);
  back.addEventListener("click", prevItem);

  load(sliders[0]);

  let timer = setInterval(() => {
    nextItem();
  }, globalValues.timer);
};
