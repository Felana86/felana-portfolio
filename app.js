

const allNavItems = document.querySelectorAll(".nav-item");
const navbar = document.querySelector(".navbar-collapse");

// pour chaque element du menu, item étant l'élément courant
// on ajoute un event

allNavItems.forEach(item = item.addEventListener('click', () => {

    navbar.classList.toggle('show');

}))