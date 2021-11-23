const navbarBtn = document.querySelector('.navbar-btn');
const navbar = document.querySelector('.navbar');

navbarBtn.addEventListener('click', function(){
  if(navbar.classList.contains('open')) {
    navbar.classList.remove('open');
    navbar.classList.add('close');
  } else {
    navbar.classList.remove('close');
    navbar.classList.add('open');
  }
});
