const projects = document.querySelector('#projects');
const certs = document.querySelector('#certs');
const exp = document.querySelector('#experience');
const istqb = document.querySelector('#istqb');

projects.style.display = "none";
certs.style.display = "none";
exp.style.display = "none";
istqb.style.display = "none";


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
        sudoku_desc.style.display = "none";
        kup_desc.style.display = "none";
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