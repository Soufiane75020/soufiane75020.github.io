/* Ceci est une fonction anonyme qui est valide quand la fenêtre est scrollé */
window.onscroll = function() {
  /* Appel la fonction myFunction */
  myFunction()
};
/*  */
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}