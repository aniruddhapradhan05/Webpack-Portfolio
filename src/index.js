import './index.scss';
import header from "./components/header/header.html";
import footer from "./components/footer/footer.html";
import about from "./components/aboutUs/aboutUs.html";
import contact from "./components/contact/contact.html"
import banner from "./components/banner/banner.html";
import skills from "./components/skills/skills.html"

import { addFormListener } from "./components/contact/contact";

const root = document.getElementById("root"); // Ensure root is defined

//render header
function renderHeader(){
  const _header = document.getElementById("header");
  _header.innerHTML = header;
}
//render Footer
function renderFooter(){
  const _footer = document.getElementById("footer");
  _footer.innerHTML = footer;
}
//add event listeners for header and footer
function attachEventListeners() {
  const aboutBtn = document.getElementById("about");
  const aboutFooterBtn = document.getElementById("aboutFooter");
  const homeBtn = document.getElementById("home");
  const homeFooterBtn = document.getElementById("homeFooter");
  const contactBtn = document.getElementById("contact");
  const contactFooterBtn = document.getElementById("contactFooter");

  if (aboutBtn) {
    aboutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("about-console");
      navigate('/about');
    });
  }
  if(aboutFooterBtn){
    aboutFooterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("about-console");
      navigate('/about');
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("home-console");
      navigate('/');
    });
  }
  if (homeFooterBtn) {
    homeFooterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigate('/');
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigate('/contact');
    });
  }
  if (contactFooterBtn) {
    contactFooterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigate('/contact');
    });
  }
}

renderHeader()
renderFooter()
attachEventListeners()


// A simple navigation function
function navigate(route) {
  history.pushState(null, '', route);
  render(route);
}

// Render different content based on the current route
function render(pathname) {

  if (pathname === '/') {
    root.innerHTML =  banner +about + skills ;
  } else if (pathname === '/about') {
    root.innerHTML = about ;
  } else if (pathname === '/contact') {
    root.innerHTML = contact ;
    addFormListener()
  }

}

window.addEventListener('popstate', () => {
  render(window.location.pathname);
});
render(window.location.pathname);


