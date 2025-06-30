const toggleBtn = document.querySelector('.toggle-menu button ');
const navMenu = document.querySelector('.nav-menu ul');


toggleBtn.addEventListener('click', function(){
  navMenu.classList.toggle('show');
});


const darkmodetoggle = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');


darkmodetoggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
updateDarkmodeicon();
});

function updateDarkmodeicon(){

  const darkmodeicon = darkmodetoggle.querySelector('i');
if(body.classList.contains('dark-mode')){
  darkmodeicon.classList.remove('fa-moon');
  darkmodeicon.classList.add('fa-sun');
}else{
darkmodeicon.classList.add('fa-moon');
darkmodeicon.classList.remove('fa-sun');
}
}