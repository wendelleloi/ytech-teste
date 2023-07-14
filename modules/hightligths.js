import { cards } from "./variables.js";

export const hightLightsController = () => {
  const hightlightContainer = document.querySelector(".hightlight-container");

  cards.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${item.background})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = item.title;

    const copy = document.createElement("p");
    copy.classList.add("copy");
    copy.innerText = item.details;

    const cta = document.createElement("button");
    cta.classList.add("btn");
    cta.innerText = item.button;

    content.appendChild(title);
    content.appendChild(copy);
    content.appendChild(cta);

    card.appendChild(content);

    hightlightContainer.appendChild(card);
  });
};
