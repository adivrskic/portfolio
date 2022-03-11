export const scrollToAnchor = (anchor) => {
  const scrollDistance =
    document.getElementById(anchor).getBoundingClientRect().top +
    window.scrollY;

  window.scroll({
    top: scrollDistance,
    behavior: "smooth",
  });
};
