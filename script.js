const navbar = document.querySelector(".navbar");
const navHeight = navbar.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navbar.classList.add("sticky", "fadeIn");
    navbar.classList.remove("invis");
  } else navbar.classList.remove("sticky", "fadeIn", "invis");
};

const navHide = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) navbar.classList.add("invis");
  else navbar.classList.remove("invis");
};

const homeObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight * 2}px`,
}).observe(document.querySelector(".section-home"));

const navObserver = new IntersectionObserver(navHide, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight * 2}px`,
}).observe(navbar);

/////////////////////////////////////////////////////////////////////////
// Reveal sections
/////////////////////////////////////////////////////////////////////////
const allSections = document.querySelectorAll(".page");

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("page--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("page--hidden");
});
