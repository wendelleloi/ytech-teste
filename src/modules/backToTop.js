const isScrolled = (el) => {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

  return isVisible;
};

// window.onscroll = function () {
//   scrollFunction(slider);
// };

export const backToTopController = () => {
  const slider = document.querySelector("#slider");
  const backToTopButton = document.querySelector(".back-to-top-button");

  function scrollFunction(slider) {
    if (
      document.body.scrollTop > slider.scrollTop ||
      document.documentElement.scrollTop > slider.scrollTop
    ) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  }

  window.onscroll = function () {
    scrollFunction(slider);
  };

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};
