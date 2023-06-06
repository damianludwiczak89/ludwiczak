
const about = document.querySelector('#introduction');
const projects = document.querySelector('#projects');
const certs = document.querySelector('#certs');

const about_button = document.querySelector('#about_button');
const projects_button = document.querySelector('#projects_button');
const certs_button = document.querySelector('#certs_button');

const hangman_desc = document.querySelector('#hangman_desc');
const fit_desc = document.querySelector('#fit_desc');
const truck_desc = document.querySelector('#truck_desc');

const hangman_button = document.querySelector('#hangman_button');
const fit_button = document.querySelector('#fit_button');
const truck_button = document.querySelector('#truck_button');

projects.style.display = "none";
certs.style.display = "none";
hangman_desc.style.display = "none";
truck_desc.style.display = "none";
fit_desc.style.display = "none";


about_button.onclick = function () {
    about.style.display = "block";
    projects.style.display = "none";
    certs.style.display = "none";
};

projects_button.onclick = function () {
    about.style.display = "none";
    projects.style.display = "block";
    certs.style.display = "none";
};

certs_button.onclick = function () {
    about.style.display = "none";
    projects.style.display = "none";
    certs.style.display = "block";
};

hangman_button.onclick = function () {
    hangman_desc.style.display = "block";
    truck_desc.style.display = "none";
    fit_desc.style.display = "none";
};
fit_button.onclick = function () {
    hangman_desc.style.display = "none";
    truck_desc.style.display = "none";
    fit_desc.style.display = "block";
};
truck_button.onclick = function () {
    hangman_desc.style.display = "none";
    truck_desc.style.display = "block";
    fit_desc.style.display = "none";
};

