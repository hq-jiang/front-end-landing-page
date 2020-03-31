/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

// Global variables
const main = document.querySelector("main");
const navbar = document.querySelector("#navbar__list");


// Helper functions
function print(string) {
  console.log(string);
}

function generateRandomTitle() {
  titleList = ["Our Mission", "Contacts", "History", "Support Us", "Career",
    "Press", "Social Media", "Software", "We're Hiring", "News"];
  randNum = Math.floor(Math.random() * 10);
  return titleList[randNum];
}

function scroll(event) {
  sectionId = event.target.getAttribute("section-id");
  section = document.querySelector(`#${sectionId}`);

  section.scrollIntoView({behavior: "smooth"});
}

function createSection(fragment, title) {
  // Create section

  sectionList = main.querySelectorAll("section");
  targetId = sectionList.length + 1;

  let section = document.createElement("section");
  section.setAttribute("data-nav", title);
  section.id = "section" + targetId;

  // Create div
  let div = document.createElement("div");
  div.classList.add("landing__container");

  // Create h2
  let h2 = document.createElement("h2");
  h2.textContent = title;

  // Create p
  let p = document.createElement("p");
  p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."

  // Stitch together
  fragment.appendChild(section);
  section.appendChild(div)
  div.appendChild(h2);
  div.appendChild(p);

  return fragment;
}

function addSection() {
  let fragment = document.createDocumentFragment();

  // Create section
  const title = generateRandomTitle();
  const sectionFragment = createSection(fragment, title);
  main.appendChild(sectionFragment);

  // Create associated navbar
  let listElement = document.createElement("li")
  listElement.textContent = main.lastChild.getAttribute("data-nav");
  listElement.classList.add("navbar__elem");
  listElement.setAttribute("section-id", main.lastChild.id);
  navbar.appendChild(listElement);
}


function buildNavbar() {
  const sectionList = main.querySelectorAll("section");
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < sectionList.length; ++i) {
    let listElement = document.createElement("li");
    listElement.textContent = sectionList[i].getAttribute("data-nav");
    listElement.classList.add("navbar__elem");
    listElement.setAttribute("section-id", sectionList[i].id);
    fragment.appendChild(listElement);
  }

  navbar.appendChild(fragment);
}

function setActiveSection() {
  const sectionList = main.querySelectorAll("section");
  let minDistance = Number.MAX_VALUE;
  let closestSectionId = 0;
  // Find section with minimum distance to top of window
  for (let i = 0; i < sectionList.length; ++i) {
    boundingRect = sectionList[i].getBoundingClientRect();
    distance = Math.abs(boundingRect.y);
    if (distance < minDistance) {
      minDistance = distance;
      closestSectionId = i;
    }
  }

  let activeSection = sectionList[closestSectionId];
  let activeSectionPrev = main.querySelector(".your-active-class");

  if (activeSection.id != activeSectionPrev.id) {
    activeSectionPrev.classList.remove("your-active-class");
    activeSection.classList.add("your-active-class");
  } else {
    // Do nothing
  }

  console.log(sectionList[closestSectionId].id);
}

/**
 * Main Functions
*/

// Build the nav
buildNavbar();

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", setActiveSection);

// Scroll to anchor ID
navbar.addEventListener("click", scroll);
