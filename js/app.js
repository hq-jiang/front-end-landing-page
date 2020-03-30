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


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
function print() {
  console.log("Hello World");
}

function createSection(fragment) {
  // Create section
  let section = document.createElement("section");
  // TODO: Add section ids and data-nav property
  section.classList.add("your-active-class");

  // Create div
  let div = document.createElement("div");
  div.classList.add("landing__container");

  // Create h2
  let h2 = document.createElement("h2");
  h2.textContent = "More";

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

function AddElementToNavbar() {
  const navbar = document.querySelector("#navbar__list");
  let listElement = document.createElement("li")
  listElement.textContent = "More";
  listElement.classList.add("navbar__elem");
  navbar.appendChild(listElement);
  console.log("Adding to Navbar");

  const main = document.querySelector("main");

  let fragment = document.createDocumentFragment();
  section = createSection(fragment);
  main.appendChild(section);
}

function scroll() {
  const section = document.querySelector("#section2");
  section.scrollIntoView({behavior: "smooth"});
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

let body = document.querySelector("body");
body.addEventListener("click", AddElementToNavbar);


body.addEventListener("click", scroll);

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
