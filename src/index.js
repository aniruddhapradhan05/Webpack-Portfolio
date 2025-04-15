import './index.scss';
import header from "./components/header/header.html";
import footer from "./components/footer/footer.html";
import about from "./components/aboutUs/aboutUs.html";
import contact from "./components/contact/contact.html"
import banner from "./components/banner/banner.html";
import skills from "./components/skills/skills.html";
import {headerFn} from './components/header/header.js';
import { addFormListener } from "./components/contact/contact.js";

const root = document.getElementById("root");

function renderHeader(){
  const _header = document.getElementById("header");
  _header.innerHTML = header;
  headerFn();
}

function renderFooter(){
  const _footer = document.getElementById("footer");
  _footer.innerHTML = footer;
}

function attachEventListeners() {
  const aboutBtn = document.getElementById("about");
  const aboutFooterBtn = document.getElementById("aboutFooter");
  const homeBtn = document.getElementById("home");
  const homeFooterBtn = document.getElementById("homeFooter");
  const contactBtn = document.getElementById("contact");
  const contactFooterBtn = document.getElementById("contactFooter");
  if(window.location.pathname.includes("contact")){
      aboutBtn.classList.remove("active");
      homeBtn.classList.remove("active");
      contactBtn.classList.add("active");
  }
  else if(window.location.pathname.includes("about")){
    homeBtn.classList.remove("active");
      contactBtn.classList.remove("active");
      aboutBtn.classList.add("active");
  }
  else{
    homeBtn.classList.add("active");
  }

  if (aboutBtn) {
    aboutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      homeBtn.classList.remove("active");
      contactBtn.classList.remove("active");
      aboutBtn.classList.add("active");
      navigate('/about');
    });
  }
  if(aboutFooterBtn){
    aboutFooterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigate('/about');
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      aboutBtn.classList.remove("active");
      contactBtn.classList.remove("active");
      homeBtn.classList.add("active");
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
      aboutBtn.classList.remove("active");
      homeBtn.classList.remove("active");
      contactBtn.classList.add("active");
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
render('/');
renderFooter()
attachEventListeners()


function navigate(route) {
  history.pushState(null, '', route);
  render(route);
}

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




