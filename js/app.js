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

/**
 * Define Global Variables
 *
*/
const main = document.querySelector("main");
const navbar = document.querySelector("#navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function print() {
  console.log("Hello World");
}

function generateRandomTitle() {
  titleList = ["Our Mission", "Contacts", "History", "Support Us", "Career",
    "Press", "Social Media", "Software", "We're Hiring", "News"];
  randNum = Math.floor(Math.random() * 10);
  return titleList[randNum];
}

function scroll(event) {
  sectionId = event.target.getAttribute("section-id");
  console.log(sectionId);
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
  // <section id="section1" data-nav="Section 1" class="your-active-class">
  //   <div class="landing__container">
  //     <h2>Getting Started</h2>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
  //
  //     <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
  //   </div>
  // </section>
}

function addSection() {
  let fragment = document.createDocumentFragment();

  // Create section
  title = generateRandomTitle();
  sectionFragment = createSection(fragment, title);
  main.appendChild(sectionFragment);
  // main.lastChild.scrollIntoView({behavior: "smooth"});

  // Create associated navbar
  let listElement = document.createElement("li")
  listElement.textContent = main.lastChild.getAttribute("data-nav");
  listElement.classList.add("navbar__elem");
  listElement.setAttribute("section-id", main.lastChild.id);
  navbar.appendChild(listElement);
}


function buildNavbar() {
  sectionList = main.querySelectorAll("section");
  let fragment = document.createDocumentFragment();
  console.log("build nav bar", sectionList.length);
  for (let i = 0; i < sectionList.length; ++i) {
    let listElement = document.createElement("li");
    listElement.textContent = sectionList[i].getAttribute("data-nav");
    listElement.classList.add("navbar__elem");
    listElement.setAttribute("section-id", sectionList[i].id);
    fragment.appendChild(listElement);
  }

  navbar.appendChild(fragment);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/




// section.classList.add("your-active-class");

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
navbar.addEventListener("click", scroll);


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildNavbar()


// Scroll to section on link click

// Set sections as active
