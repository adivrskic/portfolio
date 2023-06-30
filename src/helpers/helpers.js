export const scrollToAnchor = (anchor) => {
  const scrollDistance =
    document.getElementById(anchor).getBoundingClientRect().top +
    window.scrollY -
    68;

  window.scroll({
    top: scrollDistance,
    behavior: "smooth",
  });
};
