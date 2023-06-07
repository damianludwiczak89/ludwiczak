const projects = document.querySelector('#projects');
const certs = document.querySelector('#certs');

const hangman_desc = document.querySelector('#hangman_desc');
const fit_desc = document.querySelector('#fit_desc');
const truck_desc = document.querySelector('#truck_desc');

projects.style.display = "none";
certs.style.display = "none";
hangman_desc.style.display = "none";
truck_desc.style.display = "none";
fit_desc.style.display = "none";



const sections = document.querySelectorAll('.section');
const menu = document.querySelectorAll('#menu_button');
const buttons = document.querySelectorAll('.project_button');
const divs = document.querySelectorAll('.project_desc');


menu.forEach(function(button, index) {
    button.addEventListener('click', function() {
      sections.forEach(function(section) {
        section.style.display = "none";
      });
        sections[index].style.display = "block";
        hangman_desc.style.display = "none";
        truck_desc.style.display = "none";
        fit_desc.style.display = "none";
    });
  });



buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      divs.forEach(function(div) {
        div.style.display = "none";
      });
      divs[index].style.display = "block";
    });
  });